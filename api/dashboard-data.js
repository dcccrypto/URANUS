const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    console.log('📊 Fetching dashboard data from Helius API...');
    
    // Mock data for the dashboard
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
      topWallets: [
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
      ]
    };

    console.log('✅ Dashboard data prepared:', mockData);
    res.status(200).json(mockData);
    
  } catch (error) {
    console.error('❌ Error fetching dashboard data:', error);
    res.status(500).json({ 
      error: 'Failed to fetch dashboard data',
      message: error.message 
    });
  }
}; 