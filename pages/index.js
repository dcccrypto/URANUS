import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Load the existing script
    const script = document.createElement('script')
    script.src = '/script.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Uranus Analytics Dashboard - Professional Blockchain Analytics</title>
        <meta name="description" content="Professional blockchain analytics about UrAnus" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div>
        {/* Enhanced Floating Particles */}
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Enhanced Loading Screen */}
        <div id="loading-screen">
          <div className="loading-content">
            <div className="loading-logo">U</div>
            <div className="loading-spinner"></div>
            <h2>Initializing Analytics</h2>
            <p>Establishing secure connection to UrAnus</p>
          </div>
        </div>

        {/* Main Dashboard */}
        <main className="dashboard-section">
          <div className="dashboard-container">
            <header className="dashboard-header">
              <h1 className="dashboard-title">UrAnus Analytics Dashboard</h1>
              <p className="dashboard-subtitle">Advanced blockchain analytics</p>
            </header>

            {/* Enhanced Contract Address Section */}
            <section className="contract-address-section">
              <div className="contract-address-card">
                <div className="contract-info">
                  <span className="contract-label">Contract Address</span>
                  <span className="contract-address" id="contract-address">BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups</span>
                </div>
                <button className="copy-contract-btn" onClick={() => {
                  const contractAddress = 'BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups';
                  navigator.clipboard.writeText(contractAddress);
                }}>Copy Address</button>
              </div>
            </section>

            {/* Enhanced Top Stats Grid */}
            <section className="top-stats-grid">
              <article className="stat-card">
                <div className="stat-content">
                  <div className="stat-label">Market Cap</div>
                  <div className="stat-value" id="market-cap">Loading...</div>
                </div>
              </article>
              <article className="stat-card">
                <div className="stat-content">
                  <div className="stat-label">Volume Flowing in UrAnus</div>
                  <div className="stat-value" id="volume-24h">Loading...</div>
                </div>
              </article>
              <article className="stat-card">
                <div className="stat-content">
                  <div className="stat-label">People in UrAnus</div>
                  <div className="stat-value" id="total-holders">Loading...</div>
                </div>
              </article>
              <article className="stat-card">
                <div className="stat-content">
                  <div className="stat-label">Price of URANUS</div>
                  <div className="stat-value" id="current-price">Loading...</div>
                  <div className="price-change" id="price-change">Loading...</div>
                </div>
              </article>
            </section>

            {/* Enhanced Analytics Grid */}
            <section className="analytics-grid">
              <article className="analytics-card">
                <header className="card-header">
                  <div>
                    <h3>UrAnus Performance Metrics</h3>
                    <span className="subtitle">Real-time trading activity and market dynamics</span>
                  </div>
                  <button className="refresh-btn" onClick={() => {
                    if (typeof window !== 'undefined' && window.refreshData) {
                      window.refreshData();
                    }
                  }}>Refresh Data</button>
                </header>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-label">Total Transactions</span>
                    <span className="stat-value" id="total-transactions">Loading...</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Buy/Sell Distribution</span>
                    <span className="stat-value" id="buy-sell-ratio">Loading...</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Volume Growth Rate</span>
                    <span className="stat-value" id="volume-growth">Loading...</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Liquidity Pool</span>
                    <span className="stat-value" id="liquidity">Loading...</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">1-Day Holder Growth</span>
                    <span className="stat-value" id="holder-growth">Loading...</span>
                  </div>
                </div>
              </article>

              {/* Enhanced Top Wallets Section */}
              <article className="analytics-card">
                <header className="card-header">
                  <div>
                    <h3>Top People in UrAnus</h3>
                    <span className="subtitle">People with largest amount in UrAnus</span>
                  </div>
                </header>
                <div className="leaderboard-container">
                  <div className="leaderboard-list" id="leaderboard-list">
                    <div className="no-data">Loading holder data...</div>
                  </div>
                </div>
              </article>
            </section>

            {/* Community Card Section */}
            <section className="community-section">
              <article className="community-card">
                <header className="card-header">
                  <div>
                    <h3>Community Metrics</h3>
                    <span className="subtitle">Social media engagement and community growth</span>
                  </div>
                </header>
                <div className="community-metrics">
                  <div className="community-metric">
                    <div className="metric-content">
                      <div className="metric-label">Twitter Followers</div>
                      <div className="metric-value" id="twitter-followers">Loading...</div>
                      <div className="metric-growth" id="twitter-growth">Loading...</div>
                    </div>
                  </div>
                  <div className="community-separator"></div>
                  <div className="community-metric">
                    <div className="metric-content">
                      <div className="metric-label">X Community Members</div>
                      <div className="metric-value" id="community-members">Loading...</div>
                      <div className="metric-growth" id="community-growth">Loading...</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </main>

        {/* Enhanced Notification Container */}
        <div id="notification-container"></div>
      </div>

      <style jsx global>{`
        @import url('/styles.css');
      `}</style>
    </>
  )
} 