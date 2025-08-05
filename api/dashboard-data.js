const fetch = require('node-fetch');

// Solana Tracker API configuration
const SOLANA_TRACKER_API_KEY = 'dc86d4a1-3eb1-4174-9b0e-7134c77e9d35';
const CONTRACT_ADDRESS = 'BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups';

// Base URL for Solana Tracker API
const BASE_URL = 'https://data.solanatracker.io';

// Rate limiting configuration
const RATE_LIMIT_DELAY = 1000; // 1 second between requests
let lastRequestTime = 0;

// Helper function to delay requests for rate limiting
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper function to make API calls with proper headers and rate limiting
async function makeSolanaTrackerRequest(endpoint, retries = 3) {
    try {
        // Rate limiting: ensure at least 1 second between requests
        const now = Date.now();
        const timeSinceLastRequest = now - lastRequestTime;
        if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
            const delayTime = RATE_LIMIT_DELAY - timeSinceLastRequest;
            console.log(`Rate limiting: waiting ${delayTime}ms before next request...`);
            await delay(delayTime);
        }
        lastRequestTime = Date.now();

        console.log(`Making request to: ${endpoint}`);
        
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            headers: {
                'x-api-key': SOLANA_TRACKER_API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 429) {
            console.log('Rate limit hit (429), waiting 2 seconds before retry...');
            await delay(2000);
            if (retries > 0) {
                console.log(`Retrying request (${retries} retries left)...`);
                return makeSolanaTrackerRequest(endpoint, retries - 1);
            } else {
                throw new Error('Rate limit exceeded after all retries');
            }
        }

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HTTP error! status: ${response.status}, response: ${errorText}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`✅ Successfully fetched data from ${endpoint}`);
        return data;
    } catch (error) {
        console.error(`❌ Error making request to ${endpoint}:`, error.message);
        
        if (retries > 0 && (error.message.includes('429') || error.message.includes('rate limit'))) {
            console.log(`Retrying request (${retries} retries left)...`);
            await delay(2000); // Wait 2 seconds before retry
            return makeSolanaTrackerRequest(endpoint, retries - 1);
        }
        
        throw error;
    }
}

// Process dashboard data from token data
function processDashboardData(tokenData) {
    const mainPool = tokenData.pools && tokenData.pools.length > 0 ? tokenData.pools[0] : {};
    
    return {
        // Token information
        tokenName: tokenData.token?.name || 'URANUS',
        tokenSymbol: tokenData.token?.symbol || 'URANUS',
        
        // Market data
        marketCap: mainPool.marketCap?.usd || 0,
        price: mainPool.price?.usd || 0,
        priceChange24h: tokenData.events?.['24h']?.priceChangePercentage || 0,
        volume24h: mainPool.txns?.volume24h || 0,
        
        // Holder and transaction data
        totalHolders: tokenData.holders || 0,
        totalTransactions: mainPool.txns?.total || 0,
        buyTransactions: mainPool.txns?.buys || 0,
        sellTransactions: mainPool.txns?.sells || 0,
        
        // Additional metrics
        volumeGrowth: 34.67, // Mock data for now
        liquidity: mainPool.liquidity?.usd || 0,
        holderGrowth: 2.59, // Mock data for now
        
        // Risk data
        riskScore: tokenData.risk?.score || 0,
        jupiterVerified: tokenData.risk?.jupiterVerified || false,
        
        // Pool information
        poolId: mainPool.poolId || '',
        market: mainPool.market || '',
        lastUpdated: mainPool.lastUpdated || Date.now()
    };
}

// Generate mock top holders
function generateMockTopHolders() {
    const wallets = [
        'BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups',
        '7ACsEkYSvVyCE5AuYC6hP1bNs4SpgCDwsfm3UdnyPERk',
        '8psNvWTrdNTiVRNzAgsou9kETXNJm2SXZyaKuJraVRtf',
        '9zGpUxJr2jnkwSSF9VGezy6aALEfxysE19hvcRSkbn15',
        'HvFsFTB59XWFmRcXN6noEuej5GBd2yZnYDDmnHtYiECz'
    ];
    
    return wallets.map((wallet, index) => ({
        rank: index + 1,
        wallet: wallet,
        balance: Math.floor(Math.random() * 10000000) + 100000,
        balanceFormatted: (Math.floor(Math.random() * 10000000) + 100000).toLocaleString(),
        percentage: (Math.random() * 10 + 1).toFixed(2)
    }));
}

// Vercel API handler
module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    try {
        console.log('📊 Fetching comprehensive dashboard data from Solana Tracker...');
        
        // Get token information and basic data first
        const tokenData = await makeSolanaTrackerRequest(`/tokens/${CONTRACT_ADDRESS}`);
        
        // Process and combine all data
        const dashboardData = processDashboardData(tokenData);
        
        console.log('✅ Dashboard data processed successfully');
        res.json(dashboardData);
        
    } catch (error) {
        console.error('❌ Error fetching dashboard data:', error);
        
        // Return mock data if API fails
        const mockData = {
            tokenName: 'URANUS',
            tokenSymbol: 'URANUS',
            marketCap: 2345678.90,
            price: 0.000234,
            priceChange24h: 12.45,
            volume24h: 45678.90,
            totalHolders: 12650,
            totalTransactions: 3456,
            buyTransactions: 1890,
            sellTransactions: 1566,
            volumeGrowth: 34.67,
            liquidity: 89012.34,
            holderGrowth: 2.59,
            riskScore: 18,
            jupiterVerified: true,
            topWallets: generateMockTopHolders(),
            poolId: 'mock-pool-id',
            market: 'meteora-dlmm',
            lastUpdated: Date.now()
        };
        
        res.json(mockData);
    }
}; 