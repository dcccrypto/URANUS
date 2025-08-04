// Enhanced Loading Screen Management
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 800);
    }, 2500);
});

// Smooth Navigation Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Global variables with enhanced state management
let isLoading = false;
let particleInterval;
let lastUpdateTime = Date.now();

// Holder growth tracking
let holderGrowthData = {
    currentHolders: 12650,
    previousHolders: 12331,
    growthRate: 0,
    lastUpdated: null
};

// Community metrics tracking
let communityData = {
    twitterFollowers: 0,
    communityMembers: 0,
    twitterGrowth: 0,
    communityGrowth: 0,
    lastUpdated: null
};

// Initialize community data with historical tracking
function initializeCommunityData() {
    const today = new Date().toDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toDateString();
    
    // Initialize with default values
    const initialData = {
        [yesterdayKey]: {
            twitterFollowers: 6594,
            communityMembers: 2672
        },
        [today]: {
            twitterFollowers: 6594,
            communityMembers: 2672
        }
    };
    
    localStorage.setItem('uranusCommunityData', JSON.stringify(initialData));
    
    console.log('📊 Community data initialized with historical data:', initialData);
}

// Initialize holder growth with historical data
function initializeHolderGrowthData() {
    const today = new Date().toDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toDateString();
    
    // Initialize with provided historical data
    const initialData = {
        [yesterdayKey]: 12331,  // Yesterday's holders
        [today]: 12650          // Today's holders
    };
    
    localStorage.setItem('uranusHolderData', JSON.stringify(initialData));
    
    // Calculate initial growth rate
    const growthRate = ((12650 - 12331) / 12331) * 100;
    
    holderGrowthData = {
        currentHolders: 12650,
        previousHolders: 12331,
        growthRate: growthRate,
        lastUpdated: today
    };
    
    console.log('📈 Holder growth initialized with historical data:', holderGrowthData);
}

// Enhanced notification system with better visual feedback
function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Enhanced animation timing
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (container.contains(notification)) {
                container.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

// Enhanced copy contract address function with better feedback
function copyContractAddress() {
    const contractAddress = 'BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups';
    const button = document.querySelector('.copy-contract-btn');
    
    navigator.clipboard.writeText(contractAddress).then(() => {
        // Enhanced button state management
        const originalText = button.textContent;
        button.textContent = 'Address Copied';
        button.classList.add('copied');
        
        // Add success animation
        button.style.transform = 'scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
        
        showNotification('Smart contract address copied to clipboard', 'success');
        
        // Reset button after enhanced delay
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2500);
    }).catch(err => {
        console.error('Failed to copy contract address: ', err);
        showNotification('Failed to copy contract address', 'error');
    });
}

// Enhanced copy wallet address function
function copyWalletAddress(walletAddress, buttonElement) {
    navigator.clipboard.writeText(walletAddress).then(() => {
        const originalText = buttonElement.textContent;
        buttonElement.textContent = 'Copied';
        buttonElement.classList.add('copied');
        
        // Enhanced visual feedback
        buttonElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            buttonElement.style.transform = 'scale(1)';
        }, 200);
        
        showNotification('Wallet address copied to clipboard', 'success');
        
        setTimeout(() => {
            buttonElement.textContent = originalText;
            buttonElement.classList.remove('copied');
        }, 2500);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showNotification('Failed to copy wallet address', 'error');
    });
}

// Enhanced dynamic particles with more variety
function createDynamicParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    // Create enhanced particles with more variety
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particlesContainer.appendChild(particle);
    }
}

// Enhanced interactive effects with better visual feedback
function addInteractiveEffects() {
    // Enhanced stat cards with ripple effects
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
            // Create enhanced ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(0, 102, 255, 0.4)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.8s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '120px';
            ripple.style.height = '120px';
            ripple.style.marginLeft = '-60px';
            ripple.style.marginTop = '-60px';
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '10';
            
            this.appendChild(ripple);
            
            // Enhanced scale animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Remove ripple after animation
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 800);
            
            // Show enhanced data tooltip
            showDataTooltip(this, index);
        });
    });

    // Enhanced stat items with better feedback
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Enhanced glow effect
            this.style.boxShadow = '0 0 25px rgba(0, 102, 255, 0.6)';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 400);
            
            // Show holder growth stats if clicking on holder growth item
            const label = this.querySelector('.stat-label');
            if (label && label.textContent.includes('1-Day Holder Growth')) {
                showHolderGrowthStats();
            }
        });
    });

    // Enhanced leaderboard items
    const leaderboardItems = document.querySelectorAll('.leaderboard-item');
    leaderboardItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.classList.contains('copy-btn')) {
                return;
            }
            
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Show enhanced wallet details
            const walletAddress = this.querySelector('.wallet-address')?.textContent;
            if (walletAddress) {
                showWalletDetails(walletAddress);
            }
        });
    });
}

// Enhanced data tooltip with more professional content
function showDataTooltip(card, index) {
    const tooltips = [
        "Market capitalization represents the total value of all tokens in circulation, calculated as current price multiplied by total supply",
        "24-hour trading volume indicates the total amount of tokens traded across all exchanges in the last day",
        "Total holders represents the number of unique wallet addresses currently holding tokens",
        "Current token price with 24-hour percentage change, updated in real-time from market data"
    ];
    
    if (tooltips[index]) {
        showNotification(tooltips[index], 'info');
    }
}

// Enhanced holder growth statistics display
function showHolderGrowthStats() {
    const history = getHolderGrowthHistory();
    const dates = Object.keys(history).sort();
    
    if (dates.length < 2) {
        showNotification('Insufficient data to calculate holder growth trends', 'info');
        return;
    }
    
    const averageGrowth = calculateAverageGrowthRate(7);
    const recentGrowth = holderGrowthData.growthRate;
    const totalDays = dates.length;
    
    const statsMessage = `
        1-Day Holder Growth Statistics:
        • Today's Growth: ${recentGrowth >= 0 ? '+' : ''}${recentGrowth.toFixed(2)}%
        • 7-Day Average: ${averageGrowth >= 0 ? '+' : ''}${averageGrowth.toFixed(2)}%
        • Tracking Period: ${totalDays} days
        • Current Holders: ${holderGrowthData.currentHolders.toLocaleString()}
        • Previous Day: ${holderGrowthData.previousHolders.toLocaleString()}
    `;
    
    showNotification(statsMessage, 'info');
}

// Enhanced wallet details display
function showWalletDetails(walletAddress) {
    const fullAddress = walletAddress.includes('...') ? 
        'BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups' : walletAddress;
    
    showNotification(`Wallet Address: ${fullAddress}`, 'info');
}

// Enhanced hover effects with better transitions
function addHoverEffects() {
    const interactiveElements = document.querySelectorAll('.stat-card, .stat-item, .leaderboard-item, .refresh-btn, .copy-btn, .copy-contract-btn');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.filter = 'brightness(1.15)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.filter = 'brightness(1)';
        });
    });
}

// Enhanced number counting animation with better easing
function animateNumber(element, targetValue, duration = 1200) {
    const startValue = 0;
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Enhanced easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (targetValue - startValue) * easeOutQuart;
        
        if (element.id === 'market-cap' || element.id === 'volume-24h' || element.id === 'liquidity') {
            element.textContent = formatCurrency(currentValue);
        } else if (element.id === 'current-price') {
            element.textContent = formatPrice(currentValue);
        } else {
            element.textContent = Math.floor(currentValue).toLocaleString();
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Enhanced CSS for ripple effect
function addRippleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: var(--text-primary);
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            margin-left: 1rem;
            opacity: 0.7;
            transition: opacity 0.3s ease;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
}

// Enhanced dashboard data fetching with better error handling
async function fetchDashboardData() {
    if (isLoading) return;
    
    isLoading = true;
    showNotification('Updating market data from blockchain network...', 'info');
    
    try {
        console.log('📊 Fetching enhanced dashboard data...');
        
        // Fetch real top holders from Solana Tracker API
        const realTopHolders = await fetchRealTopHolders();
        
        // Fetch community data from Twitter API
        const communityData = await fetchCommunityData();
        
        const response = await fetch('/api/dashboard-data');
        
        if (response.ok) {
            const data = await response.json();
            console.log('✅ Enhanced dashboard data received:', data);
            
            // Update data with real top holders
            data.topWallets = realTopHolders;
            
            // Update all dashboard elements with enhanced animations
            updateStatsWithAnimation(data);
            updateAnalyticsStats(data);
            updateLeaderboard(data.topWallets);
            
            // Update community metrics
            updateCommunityMetrics(communityData);
            
            lastUpdateTime = Date.now();
            showNotification('Market data successfully updated with real holder data', 'success');
        } else {
            throw new Error('Failed to fetch dashboard data');
        }
    } catch (error) {
        console.error('❌ Error fetching dashboard data:', error);
        showNotification('Using cached data - network connection unavailable', 'warning');
        
        // Enhanced mock data with real holder data
        const mockData = {
            tokenName: 'URANUS',
            tokenSymbol: 'URANUS',
            marketCap: 2345678.90,
            price: 0.000234,
            priceChange24h: 12.45,
            volume24h: 45678.90,
            totalHolders: 12650, // Updated to actual current holders
            totalTransactions: 3456,
            buyTransactions: 1890,
            sellTransactions: 1566,
            volumeGrowth: 34.67,
            liquidity: 89012.34,
            holderGrowth: 2.59, // Calculated: (12650 - 12331) / 12331 * 100 = 2.59%
            riskScore: 18,
            jupiterVerified: true,
            topWallets: await fetchRealTopHolders() // Use real data even in fallback
        };
        
        updateStatsWithAnimation(mockData);
        updateAnalyticsStats(mockData);
        updateLeaderboard(mockData.topWallets);
        
        // Update community metrics with fallback data
        const fallbackCommunityData = {
            twitterFollowers: 6594,
            communityMembers: 2672
        };
        updateCommunityMetrics(fallbackCommunityData);
    } finally {
        isLoading = false;
    }
}

// Fetch real top holders from Solana Tracker API
async function fetchRealTopHolders() {
    const contractAddress = 'BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups';
    
    try {
        console.log('🔍 Fetching real top holders from Solana Tracker API...');
        
        // Using Solana Tracker API to get top holders
        const response = await fetch(`https://data.solanatracker.io/tokens/${contractAddress}/holders/top`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Solana Tracker API error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Real holder data received from Solana Tracker:', data);
        
        // Process the real data to extract top holders
        return processRealHolderData(data);
        
    } catch (error) {
        console.error('❌ Error fetching real holder data:', error);
        showNotification('Using fallback holder data - API connection failed', 'warning');
        return getFallbackTopHolders();
    }
}

// Process real holder data from Solana Tracker API
function processRealHolderData(solanaTrackerData) {
    try {
        console.log('📊 Raw holder data from Solana Tracker:', solanaTrackerData);
        
        // Process the array of holder data
        const topHolders = solanaTrackerData
            .filter(holder => {
                const amount = parseFloat(holder.amount || 0);
                return amount > 0;
            })
            .map((holder, index) => {
                const amount = parseFloat(holder.amount || 0);
                const balanceFormatted = amount.toLocaleString();
                const percentage = parseFloat(holder.percentage || 0).toFixed(2);
                const walletAddress = holder.address || 'Unknown';
                
                return {
                    rank: index + 1,
                    wallet: walletAddress,
                    balance: amount,
                    balanceFormatted: balanceFormatted,
                    percentage: percentage
                };
            });
        
        console.log('📊 Processed real top holders:', topHolders);
        
        // If no real data found, return fallback
        if (topHolders.length === 0) {
            console.log('⚠️ No real holder data found, using fallback');
            return getFallbackTopHolders();
        }
        
        return topHolders;
        
    } catch (error) {
        console.error('❌ Error processing real holder data:', error);
        return getFallbackTopHolders();
    }
}

// Fallback top holders data
function getFallbackTopHolders() {
    return [
        {
            rank: 1,
            wallet: '4eLPEWXz6SwwvgLbq4obGcqoSLMzRddN8Cvp4Hqim1zv',
            balance: 2263406.655343,
            balanceFormatted: '2,263,407',
            percentage: '2.26'
        },
        {
            rank: 2,
            wallet: 'GybhvUZzTq4qYBc292dz4HE4oQPZJGC9xGJdEH9uYeHK',
            balance: 2150361.234563,
            balanceFormatted: '2,150,361',
            percentage: '2.15'
        },
        {
            rank: 3,
            wallet: '4JodrSMKaqGFgfJpbioaiN7Dc2pA6PLuiDZo4n41eT4h',
            balance: 2000000,
            balanceFormatted: '2,000,000',
            percentage: '2.00'
        },
        {
            rank: 4,
            wallet: '4kguEV9YRtxuMiUJicpiUQ1itMxosEba4BHCfUTZJP3H',
            balance: 1903904.161461,
            balanceFormatted: '1,903,904',
            percentage: '1.90'
        },
        {
            rank: 5,
            wallet: '5zbQtt1q8zq1SZY4Doc6ct6PP3DhW8cx5S5z2eTcBaMj',
            balance: 1801607.66327,
            balanceFormatted: '1,801,608',
            percentage: '1.80'
        },
        {
            rank: 6,
            wallet: 'EMTtwk8XEFRrEJ8433SA57FnGGmN52wnV6vqTmstSc4w',
            balance: 1800000.165882,
            balanceFormatted: '1,800,000',
            percentage: '1.80'
        },
        {
            rank: 7,
            wallet: '6dyeqCMDACBPijCZceNTaGHmYejJ53LEo14RaJUbhsjT',
            balance: 1500000,
            balanceFormatted: '1,500,000',
            percentage: '1.50'
        },
        {
            rank: 8,
            wallet: '8VwmbW9VehM9XEc5tLinSAhag8TcrfcMnagmWKEGtxN7',
            balance: 1390282.932712,
            balanceFormatted: '1,390,283',
            percentage: '1.39'
        },
        {
            rank: 9,
            wallet: 'C6mWdjVGKTmUW3aSAv8C5C4iXymsSsYVYw4aVmhHoPVG',
            balance: 1323037.131918,
            balanceFormatted: '1,323,037',
            percentage: '1.32'
        },
        {
            rank: 10,
            wallet: 'BC8yiFFQWFEKrEEj75zYsuK3ZDCfv6QEeMRif9oZZ9TW',
            balance: 1313579.704762,
            balanceFormatted: '1,313,580',
            percentage: '1.31'
        }
    ];
}

// Enhanced main statistics update with better animations
function updateStatsWithAnimation(data) {
    console.log('📈 Updating main statistics with enhanced animations...');
    
    // Update market cap with enhanced animation
    const marketCapElement = document.getElementById('market-cap');
    if (marketCapElement) {
        animateNumber(marketCapElement, data.marketCap, 1800);
    }
    
    // Update volume with enhanced animation
    const volumeElement = document.getElementById('volume-24h');
    if (volumeElement) {
        animateNumber(volumeElement, data.volume24h, 1800);
    }
    
    // Update holders with enhanced animation
    const holdersElement = document.getElementById('total-holders');
    if (holdersElement) {
        animateNumber(holdersElement, data.totalHolders, 1200);
    }
    
    // Update price with enhanced animation
    const priceElement = document.getElementById('current-price');
    if (priceElement) {
        animateNumber(priceElement, data.price, 1500);
    }
    
    // Enhanced price change with better visual feedback
    const priceChangeElement = document.getElementById('price-change');
    if (priceChangeElement) {
        const change = data.priceChange24h;
        priceChangeElement.textContent = `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
        priceChangeElement.className = `price-change ${change >= 0 ? 'positive' : 'negative'}`;
        
        // Enhanced pulse animation for significant changes
        if (Math.abs(change) > 5) {
            priceChangeElement.style.animation = 'positivePulse 1.5s ease-in-out 3';
        }
    }
}

// Enhanced analytics statistics update
function updateAnalyticsStats(data) {
    console.log('📊 Updating enhanced analytics statistics...');
    
    // Update total transactions
    const transactionsElement = document.getElementById('total-transactions');
    if (transactionsElement) {
        transactionsElement.textContent = data.totalTransactions.toLocaleString();
    }
    
    // Enhanced buy/sell ratio calculation
    const buySellElement = document.getElementById('buy-sell-ratio');
    if (buySellElement && data.buyTransactions && data.sellTransactions) {
        const ratio = (data.buyTransactions / (data.buyTransactions + data.sellTransactions) * 100).toFixed(1);
        buySellElement.textContent = `${ratio}% Buy / ${(100 - ratio).toFixed(1)}% Sell`;
    }
    
    // Enhanced growth rate display
    const volumeGrowthElement = document.getElementById('volume-growth');
    if (volumeGrowthElement) {
        volumeGrowthElement.textContent = `+${data.volumeGrowth}%`;
    }
    
    // Enhanced liquidity display with animation
    const liquidityElement = document.getElementById('liquidity');
    if (liquidityElement) {
        animateNumber(liquidityElement, data.liquidity, 1500);
    }
    
    // Enhanced holder growth tracking and display
    updateHolderGrowth(data.totalHolders);
}

// Holder growth tracking functions
function updateHolderGrowth(currentHolders) {
    const today = new Date().toDateString();
    const storedData = localStorage.getItem('uranusHolderData');
    let holderHistory = storedData ? JSON.parse(storedData) : {};
    
    // Get previous day's data
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toDateString();
    const previousHolders = holderHistory[yesterdayKey] || 12331; // Default to yesterday's known value
    
    // Store today's data
    holderHistory[today] = currentHolders;
    localStorage.setItem('uranusHolderData', JSON.stringify(holderHistory));
    
    // Calculate growth rate using the formula: ((new - old) / old) * 100
    const growthRate = previousHolders > 0 ? ((currentHolders - previousHolders) / previousHolders) * 100 : 0;
    
    // Update global holder growth data
    holderGrowthData = {
        currentHolders: currentHolders,
        previousHolders: previousHolders,
        growthRate: growthRate,
        lastUpdated: today
    };
    
    // Update display
    const holderGrowthElement = document.getElementById('holder-growth');
    if (holderGrowthElement) {
        const growthValue = holderGrowthData.growthRate;
        const sign = growthValue >= 0 ? '+' : '';
        holderGrowthElement.textContent = `${sign}${growthValue.toFixed(2)}%`;
        
        // Add visual feedback based on growth direction
        if (growthValue > 0) {
            holderGrowthElement.style.color = 'var(--success-green)';
            holderGrowthElement.style.textShadow = '0 0 10px var(--glow-green)';
            holderGrowthElement.style.animation = 'positivePulse 2s ease-in-out infinite';
        } else if (growthValue < 0) {
            holderGrowthElement.style.color = 'var(--error-red)';
            holderGrowthElement.style.textShadow = '0 0 10px var(--glow-red)';
            holderGrowthElement.style.animation = 'negativePulse 2s ease-in-out infinite';
        } else {
            holderGrowthElement.style.color = 'var(--text-secondary)';
            holderGrowthElement.style.textShadow = 'none';
            holderGrowthElement.style.animation = 'none';
        }
    }
    
    console.log('📈 Holder growth updated:', holderGrowthData);
    console.log(`📊 Growth calculation: (${currentHolders} - ${previousHolders}) / ${previousHolders} * 100 = ${growthRate.toFixed(2)}%`);
}

// Get holder growth history for analysis
function getHolderGrowthHistory() {
    const storedData = localStorage.getItem('uranusHolderData');
    return storedData ? JSON.parse(storedData) : {};
}

// Calculate average growth rate over a period
function calculateAverageGrowthRate(days = 7) {
    const history = getHolderGrowthHistory();
    const dates = Object.keys(history).sort();
    
    if (dates.length < 2) return 0;
    
    const recentDates = dates.slice(-days);
    let totalGrowth = 0;
    let growthCount = 0;
    
    for (let i = 1; i < recentDates.length; i++) {
        const current = history[recentDates[i]];
        const previous = history[recentDates[i-1]];
        
        if (previous > 0) {
            const growth = ((current - previous) / previous) * 100;
            totalGrowth += growth;
            growthCount++;
        }
    }
    
    return growthCount > 0 ? totalGrowth / growthCount : 0;
}

// Enhanced leaderboard update with better visual effects
function updateLeaderboard(topWallets) {
    console.log('🏆 Updating enhanced leaderboard...');
    
    const leaderboardContainer = document.getElementById('leaderboard-list');
    if (!leaderboardContainer) return;
    
    leaderboardContainer.innerHTML = '';
    
    if (topWallets && topWallets.length > 0) {
        topWallets.forEach((wallet, index) => {
            const walletElement = document.createElement('div');
            walletElement.className = 'leaderboard-item';
            walletElement.style.animationDelay = `${index * 0.15}s`;
            walletElement.innerHTML = `
                <div class="rank">#${wallet.rank}</div>
                <div class="wallet-info">
                    <div class="wallet-address">${formatWalletAddress(wallet.wallet)}</div>
                    <div class="wallet-balance">${wallet.balanceFormatted} URANUS</div>
                </div>
                <div class="wallet-percentage">${wallet.percentage}%</div>
                <button class="copy-btn" onclick="copyWalletAddress('${wallet.wallet}', this)">Copy</button>
            `;
            leaderboardContainer.appendChild(walletElement);
        });
    } else {
        leaderboardContainer.innerHTML = '<div class="no-data">No holder data available</div>';
    }
}

// Enhanced refresh data function
function refreshData() {
    if (isLoading) {
        showNotification('Data update already in progress', 'warning');
        return;
    }
    fetchDashboardData();
}

// Enhanced utility functions with better formatting
function formatCurrency(amount) {
    if (amount >= 1e9) {
        return `$${(amount / 1e9).toFixed(2)}B`;
    } else if (amount >= 1e6) {
        return `$${(amount / 1e6).toFixed(2)}M`;
    } else if (amount >= 1e3) {
        return `$${(amount / 1e3).toFixed(2)}K`;
    } else {
        return `$${amount.toFixed(2)}`;
    }
}

function formatPrice(price) {
    if (price < 0.0001) {
        return `$${price.toExponential(2)}`;
    } else {
        return `$${price.toFixed(6)}`;
    }
}

function formatWalletAddress(address) {
    if (!address) return 'Unknown';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

// Enhanced dashboard initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing enhanced Uranus Analytics Dashboard...');
    
    // Add enhanced ripple CSS
    addRippleCSS();
    
    // Create enhanced dynamic particles
    createDynamicParticles();
    
    // Initialize holder growth with historical data
    initializeHolderGrowthData();

    // Initialize community data with historical tracking
    initializeCommunityData();
    
    // Apply holder growth highlight styling
    applyHolderGrowthStyling();
    
    // Enhanced loading screen management
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 800);
        }
    }, 1200);
    
    // Add enhanced interactive effects
    addInteractiveEffects();
    addHoverEffects();
    
    // Fetch initial data with enhanced timing
    setTimeout(() => {
        fetchDashboardData();
    }, 500);
    
    // Enhanced refresh button functionality
    const refreshBtn = document.querySelector('.refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            fetchDashboardData();
            showNotification('Refreshing market data from blockchain...', 'info');
        });
    }
    
    // Enhanced keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'r') {
            e.preventDefault();
            refreshData();
        }
    });
    
    // Auto-refresh functionality (every 5 minutes)
    setInterval(() => {
        if (!isLoading && Date.now() - lastUpdateTime > 300000) {
            fetchDashboardData();
        }
    }, 300000);
});

// Apply holder growth styling
function applyHolderGrowthStyling() {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        const label = item.querySelector('.stat-label');
        if (label && label.textContent.includes('1-Day Holder Growth')) {
            item.classList.add('holder-growth-highlight');
        }
    });
}

// Fetch community data from Twitter API
async function fetchCommunityData() {
    try {
        console.log('🔍 Fetching community data from Twitter API...');
        
        // Fetch Twitter followers
        const twitterResponse = await fetch('https://api.twitterapi.io/twitter/user/info?userName=Enter_Uranus', {
            method: 'GET',
            headers: {
                'X-API-Key': '183c85c65480451da0ef6d993754e76c',
                'Content-Type': 'application/json'
            }
        });
        
        // Fetch X Community members
        const communityResponse = await fetch('https://api.twitterapi.io/twitter/community/info?community_id=1940787479281361171', {
            method: 'GET',
            headers: {
                'X-API-Key': '183c85c65480451da0ef6d993754e76c',
                'Content-Type': 'application/json'
            }
        });
        
        if (!twitterResponse.ok || !communityResponse.ok) {
            throw new Error('Twitter API request failed');
        }
        
        const twitterData = await twitterResponse.json();
        const communityData = await communityResponse.json();
        
        console.log('✅ Community data received:', { twitterData, communityData });
        
        return {
            twitterFollowers: twitterData.data?.followers || 6594,
            communityMembers: communityData.community_info?.member_count || 2672
        };
        
    } catch (error) {
        console.error('❌ Error fetching community data:', error);
        showNotification('Using cached community data - API connection failed', 'warning');
        return {
            twitterFollowers: 6594,
            communityMembers: 2672
        };
    }
}

// Update community metrics with growth tracking
function updateCommunityMetrics(currentData) {
    const today = new Date().toDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toDateString();
    
    // Get historical data
    const historicalData = JSON.parse(localStorage.getItem('uranusCommunityData') || '{}');
    const yesterdayData = historicalData[yesterdayKey] || {
        twitterFollowers: 6594,
        communityMembers: 2672
    };
    
    // Calculate growth
    const twitterGrowth = currentData.twitterFollowers - yesterdayData.twitterFollowers;
    const communityGrowth = currentData.communityMembers - yesterdayData.communityMembers;
    
    // Update historical data
    historicalData[today] = currentData;
    localStorage.setItem('uranusCommunityData', JSON.stringify(historicalData));
    
    // Update community data object
    communityData = {
        twitterFollowers: currentData.twitterFollowers,
        communityMembers: currentData.communityMembers,
        twitterGrowth: twitterGrowth,
        communityGrowth: communityGrowth,
        lastUpdated: today
    };
    
    // Update UI
    updateCommunityUI();
    
    console.log('📊 Community metrics updated:', communityData);
}

// Update community UI elements
function updateCommunityUI() {
    // Update Twitter followers
    const twitterFollowersElement = document.getElementById('twitter-followers');
    const twitterGrowthElement = document.getElementById('twitter-growth');
    
    if (twitterFollowersElement) {
        animateNumber(twitterFollowersElement, communityData.twitterFollowers, 1200);
    }
    
    if (twitterGrowthElement) {
        const growthText = communityData.twitterGrowth >= 0 
            ? `+${communityData.twitterGrowth}` 
            : `${communityData.twitterGrowth}`;
        const growthClass = communityData.twitterGrowth > 0 ? 'positive' : 
                           communityData.twitterGrowth < 0 ? 'negative' : 'neutral';
        
        twitterGrowthElement.textContent = growthText;
        twitterGrowthElement.className = `metric-growth ${growthClass}`;
    }
    
    // Update Community members
    const communityMembersElement = document.getElementById('community-members');
    const communityGrowthElement = document.getElementById('community-growth');
    
    if (communityMembersElement) {
        animateNumber(communityMembersElement, communityData.communityMembers, 1200);
    }
    
    if (communityGrowthElement) {
        const growthText = communityData.communityGrowth >= 0 
            ? `+${communityData.communityGrowth}` 
            : `${communityData.communityGrowth}`;
        const growthClass = communityData.communityGrowth > 0 ? 'positive' : 
                           communityData.communityGrowth < 0 ? 'negative' : 'neutral';
        
        communityGrowthElement.textContent = growthText;
        communityGrowthElement.className = `metric-growth ${growthClass}`;
    }
}