# Uranus Analytics Dashboard

A professional blockchain analytics dashboard for the Uranus token, featuring real-time data from Solana blockchain and social media metrics.

## 🚀 Features

- **Real-time Blockchain Data**: Live market cap, volume, holders, and price data
- **Solana Tracker Integration**: Real top holder data from Solana blockchain
- **Twitter API Integration**: Live follower count and community metrics
- **Daily Growth Tracking**: Historical data analysis with growth indicators
- **Professional UI**: Clean, modern design with smooth animations
- **Responsive Design**: Works perfectly on all devices
- **Real-time Updates**: Auto-refresh functionality

## 📊 Data Sources

### Blockchain Data
- **Solana Tracker API**: Real holder data and market metrics
- **Contract Address**: `BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups`

### Social Media Metrics
- **Twitter Followers**: Live count from `@Enter_Uranus`
- **X Community Members**: Real member count from community `1940787479281361171`

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Advanced animations and responsive design
- **JavaScript**: Real-time data fetching and UI interactions
- **Vercel**: Deployment and hosting platform

## 🚀 Deployment

### Deploy to Vercel

1. **Fork/Clone Repository**
   ```bash
   git clone https://github.com/your-username/uranus-analytics-dashboard.git
   cd uranus-analytics-dashboard
   ```

2. **Install Dependencies** (if needed)
   ```bash
   npm install
   ```

3. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Set project name
   - Deploy

## 📁 Project Structure

```
uranus-analytics-dashboard/
├── index.html              # Main dashboard page
├── styles.css              # Professional styling
├── script.js               # Interactive functionality
├── package.json            # Project configuration
├── vercel.json             # Vercel deployment config
├── .gitignore             # Git ignore rules
└── README.md              # Project documentation
```

## 🔧 Configuration

### Environment Variables (Optional)
The dashboard works without environment variables, but you can add them in Vercel:

- `TWITTER_API_KEY`: Your Twitter API key
- `SOLANA_TRACKER_API_KEY`: Your Solana Tracker API key

### API Endpoints

#### Solana Tracker API
```bash
GET https://data.solanatracker.io/tokens/{tokenAddress}/holders/top
```

#### Twitter API
```bash
GET https://api.twitterapi.io/twitter/user/info?userName=Enter_Uranus
GET https://api.twitterapi.io/twitter/community/info?community_id=1940787479281361171
```

## 🎯 Key Features

### Real-time Analytics
- Market capitalization tracking
- Volume analysis with growth indicators
- Holder count with daily growth tracking
- Price monitoring with change indicators

### Community Metrics
- Twitter follower count with daily growth
- X Community member tracking
- Visual growth indicators (green/red)

### Professional Design
- Glass morphism effects
- Smooth animations and transitions
- Responsive layout for all devices
- Professional color scheme

## 🔄 Auto-refresh

The dashboard automatically refreshes data every 5 minutes to ensure real-time accuracy.

## 📱 Mobile Responsive

Fully optimized for mobile devices with touch-friendly interactions and responsive design.

## 🚀 Performance

- **Fast Loading**: Optimized assets and caching
- **CDN Delivery**: Global content delivery network
- **SSL Security**: Automatic HTTPS encryption
- **SEO Optimized**: Proper meta tags and structure

## 📈 Analytics

Track your dashboard performance with built-in analytics and monitoring.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- **Live Demo**: [https://uranus-analytics.vercel.app](https://uranus-analytics.vercel.app)
- **GitHub**: [https://github.com/your-username/uranus-analytics-dashboard](https://github.com/your-username/uranus-analytics-dashboard)
- **Vercel**: [https://vercel.com](https://vercel.com)

---

Built with ❤️ for the Uranus community 