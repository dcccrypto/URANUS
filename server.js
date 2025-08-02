const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors({
    origin: ['http://localhost:8000', 'http://127.0.0.1:5500', 'http://localhost:5500'],
    credentials: true
}));

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Helius API configuration
const HELIUS_API_KEY = 'e568033d-06d6-49d1-ba90-b3564c91851b';
const CONTRACT_ADDRESS = 'BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups';

// Proxy endpoint for token metadata
app.post('/api/token-metadata', async (req, res) => {
    try {
        const response = await fetch(`https://api.helius.xyz/v0/token-metadata?api-key=${HELIUS_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mintAccounts: [CONTRACT_ADDRESS],
                includeOffChain: true,
                disableCache: false,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching token metadata:', error);
        res.status(500).json({ error: 'Failed to fetch token metadata' });
    }
});

// Proxy endpoint for token balances
app.get('/api/token-balances', async (req, res) => {
    try {
        const response = await fetch(`https://api.helius.xyz/v0/addresses/${CONTRACT_ADDRESS}/balances?api-key=${HELIUS_API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching token balances:', error);
        res.status(500).json({ error: 'Failed to fetch token balances' });
    }
});

// Proxy endpoint for transactions
app.post('/api/transactions', async (req, res) => {
    try {
        const response = await fetch(`https://api.helius.xyz/v0/addresses/${CONTRACT_ADDRESS}/transactions?api-key=${HELIUS_API_KEY}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
});

// Proxy endpoint for token holders using getTokenAccounts
app.get('/api/token-holders', async (req, res) => {
    try {
        let page = 1;
        let allHolders = new Set();
        let totalAmount = 0;

        while (true) {
            const response = await fetch(`https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: 'helius-test',
                    method: 'getTokenAccounts',
                    params: {
                        page: page,
                        limit: 1000,
                        displayOptions: {},
                        mint: CONTRACT_ADDRESS,
                    },
                }),
            });

            if (!response.ok) {
                console.error(`Helius API error: ${response.status} - ${response.statusText}`);
                break;
            }

            const data = await response.json();
            
            if (!data.result || data.result.token_accounts.length === 0) {
                console.log(`No more results. Total pages: ${page - 1}`);
                break;
            }

            console.log(`Processing results from page ${page}`);
            
            data.result.token_accounts.forEach((account) => {
                allHolders.add(account.owner);
                totalAmount += parseInt(account.amount || 0);
            });
            
            page++;
        }

        const holdersData = {
            totalHolders: allHolders.size,
            totalSupply: totalAmount,
            holders: Array.from(allHolders)
        };

        res.json(holdersData);
    } catch (error) {
        console.error('Error fetching token holders:', error);
        // Return mock data on error
        const mockHoldersData = {
            totalHolders: 1250,
            totalSupply: 1000000000,
            holders: ['mock_wallet_1', 'mock_wallet_2', 'mock_wallet_3']
        };
        res.json(mockHoldersData);
    }
});

// Proxy endpoint for top wallets with detailed balance info
app.get('/api/top-wallets', async (req, res) => {
    try {
        let page = 1;
        let allAccounts = [];

        while (true) {
            const response = await fetch(`https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: 'helius-test',
                    method: 'getTokenAccounts',
                    params: {
                        page: page,
                        limit: 1000,
                        displayOptions: {},
                        mint: CONTRACT_ADDRESS,
                    },
                }),
            });

            if (!response.ok) {
                console.error(`Helius API error: ${response.status} - ${response.statusText}`);
                break;
            }

            const data = await response.json();
            
            if (!data.result || data.result.token_accounts.length === 0) {
                console.log(`No more results. Total pages: ${page - 1}`);
                break;
            }

            allAccounts = allAccounts.concat(data.result.token_accounts);
            page++;
        }

        // Group by owner and sum balances
        const walletBalances = {};
        allAccounts.forEach(account => {
            const owner = account.owner;
            const amount = parseInt(account.amount || 0);
            
            if (!walletBalances[owner]) {
                walletBalances[owner] = 0;
            }
            walletBalances[owner] += amount;
        });

        // Convert to array and sort by balance
        const sortedWallets = Object.entries(walletBalances)
            .map(([wallet, balance]) => ({
                wallet: wallet,
                balance: balance,
                balanceFormatted: balance.toLocaleString()
            }))
            .sort((a, b) => b.balance - a.balance)
            .slice(0, 10); // Top 10 wallets

        // Calculate percentages
        const totalSupply = sortedWallets.reduce((sum, wallet) => sum + wallet.balance, 0);
        const walletsWithPercentage = sortedWallets.map((wallet, index) => ({
            rank: index + 1,
            wallet: wallet.wallet,
            balance: wallet.balanceFormatted,
            percentage: totalSupply > 0 ? ((wallet.balance / totalSupply) * 100).toFixed(2) : "0.00"
        }));

        res.json(walletsWithPercentage);
    } catch (error) {
        console.error('Error fetching top wallets:', error);
        // Return mock data on error
        const mockWallets = [
            { rank: 1, wallet: "mock_wallet_1", balance: "1,000,000", percentage: "25.50" },
            { rank: 2, wallet: "mock_wallet_2", balance: "750,000", percentage: "19.12" },
            { rank: 3, wallet: "mock_wallet_3", balance: "500,000", percentage: "12.75" },
            { rank: 4, wallet: "mock_wallet_4", balance: "250,000", percentage: "6.37" },
            { rank: 5, wallet: "mock_wallet_5", balance: "100,000", percentage: "2.55" }
        ];
        res.json(mockWallets);
    }
});

// Proxy endpoint for comprehensive token stats
app.get('/api/token-stats', async (req, res) => {
    try {
        console.log('Fetching comprehensive token stats...');
        
        // Get real price data first
        const priceResponse = await fetch(`http://localhost:${PORT}/api/token-price`);
        let priceData = { tokenPrice: 0.0001, solPrice: 100, usdPrice: 0.01 };
        
        if (priceResponse.ok) {
            priceData = await priceResponse.json();
            console.log('Real price data fetched:', priceData);
        }
        
        // Get token metadata for price and supply info
        const metadataResponse = await fetch(`https://api.helius.xyz/v0/token-metadata?api-key=${HELIUS_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mintAccounts: [CONTRACT_ADDRESS],
                includeOffChain: true,
                disableCache: false,
            }),
        });

        let metadata = null;
        if (metadataResponse.ok) {
            metadata = await metadataResponse.json();
            console.log('Token metadata fetched:', metadata);
        }

        // Get token holders data with pagination
        let page = 1;
        let allHolders = new Set();
        let totalAmount = 0;
        let holderBalances = new Map(); // Track individual holder balances

        console.log('Fetching token holders...');
        while (true) {
            const holdersResponse = await fetch(`https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: 'helius-test',
                    method: 'getTokenAccounts',
                    params: {
                        page: page,
                        limit: 1000,
                        displayOptions: {},
                        mint: CONTRACT_ADDRESS,
                    },
                }),
            });

            if (!holdersResponse.ok) {
                console.error(`Helius API error: ${holdersResponse.status} - ${holdersResponse.statusText}`);
                break;
            }

            const data = await holdersResponse.json();
            if (!data.result || data.result.token_accounts.length === 0) {
                console.log(`No more results. Total pages: ${page - 1}`);
                break;
            }

            console.log(`Processing ${data.result.token_accounts.length} accounts from page ${page}`);
            
            data.result.token_accounts.forEach((account) => {
                allHolders.add(account.owner);
                const amount = parseInt(account.amount || 0);
                totalAmount += amount;
                
                // Track individual holder balances for market cap calculation
                if (!holderBalances.has(account.owner)) {
                    holderBalances.set(account.owner, 0);
                }
                holderBalances.set(account.owner, holderBalances.get(account.owner) + amount);
            });
            
            page++;
        }

        console.log(`Total holders: ${allHolders.size}, Total supply: ${totalAmount}`);

        // Get recent transactions for volume calculation (last 24 hours)
        console.log('Fetching recent transactions for volume calculation...');
        const transactionsResponse = await fetch(`https://api.helius.xyz/v0/addresses/${CONTRACT_ADDRESS}/transactions?api-key=${HELIUS_API_KEY}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        let volume24h = 0;
        let recentTransactions = [];
        let transactionPriceData = [];
        
        if (transactionsResponse.ok) {
            const transactions = await transactionsResponse.json();
            const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
            
            console.log(`Processing ${transactions.length} transactions for volume calculation`);
            
            // Process transactions for volume and price data
            transactions.forEach(tx => {
                if (tx.timestamp && tx.timestamp > oneDayAgo) {
                    recentTransactions.push(tx);
                    
                    // Extract volume from transaction data
                    if (tx.tokenTransfers && tx.tokenTransfers.length > 0) {
                        tx.tokenTransfers.forEach(transfer => {
                            if (transfer.mint === CONTRACT_ADDRESS) {
                                // Calculate USD value using real price
                                const tokenAmount = parseInt(transfer.amount || 0);
                                volume24h += tokenAmount * priceData.usdPrice;
                            }
                        });
                    }
                    
                    // Extract price data if available
                    if (tx.nativeTransfers && tx.nativeTransfers.length > 0) {
                        const solAmount = tx.nativeTransfers.reduce((sum, transfer) => sum + transfer.amount, 0);
                        if (solAmount > 0) {
                            transactionPriceData.push({
                                timestamp: tx.timestamp,
                                price: solAmount / 1000000000 // Convert lamports to SOL
                            });
                        }
                    }
                }
            });
        }

        // Calculate real market cap using circulating supply and real price
        const circulatingSupply = totalAmount;
        const realPrice = priceData.usdPrice;
        const marketCap = circulatingSupply * realPrice;

        // Calculate holder growth (mock for now, would need historical data)
        const holdersGrowth = Math.floor(Math.random() * 50) + 10;
        
        // Calculate volume growth (mock for now, would need historical data)
        const volumeGrowth = Math.floor(Math.random() * 100) + 20;
        
        // Calculate price change (mock for now, would need historical price data)
        const priceChange24h = (Math.random() - 0.5) * 20;

        const comprehensiveStats = {
            totalHolders: allHolders.size,
            totalSupply: totalAmount,
            circulatingSupply: circulatingSupply,
            marketCap: marketCap,
            volume24h: volume24h,
            price: realPrice,
            priceSOL: priceData.tokenPrice,
            holdersGrowth: holdersGrowth,
            volumeGrowth: volumeGrowth,
            priceChange24h: priceChange24h,
            recentTransactions: recentTransactions.length,
            metadata: metadata,
            holderBalances: Object.fromEntries(holderBalances),
            priceData: priceData
        };

        console.log('Comprehensive stats calculated:', {
            totalHolders: comprehensiveStats.totalHolders,
            totalSupply: comprehensiveStats.totalSupply,
            marketCap: comprehensiveStats.marketCap,
            volume24h: comprehensiveStats.volume24h,
            price: comprehensiveStats.price,
            priceSOL: comprehensiveStats.priceSOL
        });

        res.json(comprehensiveStats);
    } catch (error) {
        console.error('Error fetching comprehensive token stats:', error);
        // Return mock comprehensive stats
        const mockStats = {
            totalHolders: 1250,
            totalSupply: 1000000000,
            circulatingSupply: 1000000000,
            marketCap: 100000,
            volume24h: 50000,
            price: 0.0001,
            priceSOL: 0.0001,
            holdersGrowth: 25,
            volumeGrowth: 45,
            priceChange24h: 12.5,
            recentTransactions: 150,
            metadata: null,
            holderBalances: {},
            priceData: { tokenPrice: 0.0001, solPrice: 100, usdPrice: 0.01 }
        };
        res.json(mockStats);
    }
});

// Proxy endpoint for Jupiter price data
app.get('/api/token-price', async (req, res) => {
    try {
        console.log('Fetching token price from Jupiter...');
        
        // Get SOL price first
        const solPriceResponse = await fetch('https://price.jup.ag/v4/price?ids=SOL');
        let solPrice = 0;
        
        if (solPriceResponse.ok) {
            const solData = await solPriceResponse.json();
            solPrice = solData.data.SOL?.price || 0;
            console.log('SOL price:', solPrice);
        }
        
        // Get token price from Jupiter (if available)
        const tokenPriceResponse = await fetch(`https://price.jup.ag/v4/price?ids=${CONTRACT_ADDRESS}`);
        let tokenPrice = 0.0001; // Default fallback price
        
        if (tokenPriceResponse.ok) {
            const tokenData = await tokenPriceResponse.json();
            if (tokenData.data && tokenData.data[CONTRACT_ADDRESS]) {
                tokenPrice = tokenData.data[CONTRACT_ADDRESS].price;
                console.log('Token price from Jupiter:', tokenPrice);
            } else {
                console.log('Token not found in Jupiter price feed, using default');
            }
        }
        
        const priceData = {
            tokenPrice: tokenPrice,
            solPrice: solPrice,
            usdPrice: tokenPrice * solPrice,
            timestamp: Date.now()
        };
        
        console.log('Price data:', priceData);
        res.json(priceData);
    } catch (error) {
        console.error('Error fetching token price:', error);
        // Return default price data
        const defaultPriceData = {
            tokenPrice: 0.0001,
            solPrice: 100,
            usdPrice: 0.01,
            timestamp: Date.now()
        };
        res.json(defaultPriceData);
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Uranus API Proxy is running' });
});

app.listen(PORT, () => {
    console.log(`🚀 Uranus API Proxy Server running on http://localhost:${PORT}`);
    console.log(`📊 Serving Helius API requests for Uranus token: ${CONTRACT_ADDRESS}`);
}); 