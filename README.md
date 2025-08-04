# Uranus Analytics Dashboard

A professional, real-time blockchain analytics dashboard for the Uranus token, featuring comprehensive market data, holder analytics, and community metrics.

## 🚀 Features

- **Real-time Blockchain Data**: Live integration with Solana Tracker API
- **Professional UI**: Modern, responsive design with smooth animations
- **Holder Analytics**: Real top holder data with growth tracking
- **Community Metrics**: Twitter followers and X Community members with daily growth
- **Interactive Elements**: Copy functionality, notifications, and hover effects
- **Mobile Responsive**: Optimized for all device sizes

## 📊 Data Sources

- **Solana Tracker API**: Real blockchain data and token information
- **Twitter API**: Community engagement metrics
- **Real-time Updates**: Auto-refresh every 5 minutes

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js with Express (for local development)
- **Deployment**: Vercel serverless functions
- **APIs**: Solana Tracker, Twitter API
- **Styling**: Custom CSS with CSS Grid and Flexbox

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Link to existing project or create new
   - Set project name: `uranus-analytics-dashboard`
   - Confirm deployment settings

### Manual Deployment

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd uranus-analytics-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Deploy to Vercel**:
   - Push to GitHub
   - Connect repository to Vercel
   - Deploy automatically

## 🔧 Configuration

### Environment Variables

The following environment variables are configured in the code:

- `SOLANA_TRACKER_API_KEY`: API key for Solana Tracker
- `TWITTER_API_KEY`: API key for Twitter API

### API Endpoints

- **Dashboard Data**: `/api/dashboard-data`
- **Community Data**: Twitter API integration
- **Real-time Updates**: Auto-refresh functionality

## 📁 Project Structure

```
uranus-analytics-dashboard/
├── index.html              # Main dashboard page
├── styles.css              # Professional styling
├── script.js               # Interactive functionality
├── server.js               # Local development server
├── api/
│   └── dashboard-data.js   # Vercel serverless function
├── package.json            # Dependencies and scripts
├── vercel.json            # Vercel configuration
└── README.md              # Project documentation
```

## 🎯 Key Features

### Real-time Data
- Live market cap and price updates
- Real-time volume and transaction data
- Holder growth tracking
- Community engagement metrics

### Professional Design
- Clean, modern interface
- Smooth animations and transitions
- Responsive design for all devices
- Professional color scheme and typography

### Interactive Elements
- Copy functionality for addresses
- Real-time notifications
- Hover effects and animations
- Auto-refresh capabilities

## 🔄 Build Process

The project uses a simple build process optimized for Vercel:

1. **Static Files**: HTML, CSS, and JavaScript are served directly
2. **API Routes**: Serverless functions handle data fetching
3. **CORS**: Proper headers for cross-origin requests
4. **Rate Limiting**: Built-in protection for API calls

## 📈 Performance

- **Fast Loading**: Optimized static assets
- **Efficient API Calls**: Rate limiting and caching
- **CDN Delivery**: Vercel's global CDN
- **Auto-scaling**: Serverless architecture

## 🛡️ Security

- **CORS Headers**: Proper cross-origin configuration
- **API Rate Limiting**: Protection against abuse
- **Error Handling**: Graceful fallbacks
- **Input Validation**: Secure data processing

## 🚀 Quick Start

1. **Clone and install**:
   ```bash
   git clone <your-repo-url>
   cd uranus-analytics-dashboard
   npm install
   ```

2. **Local development**:
   ```bash
   npm run dev
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```

## 📝 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ for the Uranus community** 