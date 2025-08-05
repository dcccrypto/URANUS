# Uranus Analytics Dashboard

A professional blockchain analytics dashboard for the Uranus token, featuring real-time data from Solana Tracker API and Twitter API integration.

## Features

- **Real-time Blockchain Data**: Live market cap, volume, price, and holder statistics
- **Community Metrics**: Twitter followers and X Community members with daily growth tracking
- **Professional UI**: Clean, modern design with smooth animations
- **API Integration**: Solana Tracker API for blockchain data, Twitter API for social metrics
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **APIs**: Solana Tracker API, Twitter API
- **Deployment**: Vercel

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Deploy automatically** - Vercel will detect the configuration and deploy
3. **No additional setup required** - all configuration is included

### Configuration Files

- `vercel.json`: Vercel deployment configuration
- `package.json`: Build scripts and dependencies
- `api/dashboard-data.js`: API endpoint for dashboard data

### Environment Variables

The following environment variables are used (configured in Vercel dashboard):

- `SOLANA_TRACKER_API_KEY`: API key for Solana Tracker
- `TWITTER_API_KEY`: API key for Twitter API

## API Endpoints

### `/api/dashboard-data`
Returns comprehensive dashboard data including:
- Market cap, price, volume
- Holder statistics
- Transaction data
- Risk metrics
- Top wallet holders

## Project Structure

```
uranus-dashboard/
├── index.html          # Main dashboard page
├── styles.css          # Professional styling
├── script.js           # Frontend functionality
├── server.js           # Express server (local development)
├── api/
│   └── dashboard-data.js  # Vercel API endpoint
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## Features

### Real-time Data
- Live market cap and volume from Solana blockchain
- Real-time price changes and percentage movements
- Current holder count and transaction statistics

### Community Metrics
- Twitter followers count with daily growth tracking
- X Community members with growth indicators
- Color-coded growth display (+ green, - red)

### Professional UI
- Clean, modern design with glass morphism effects
- Smooth animations and hover effects
- Responsive layout for all devices
- Professional color scheme and typography

### API Integration
- Solana Tracker API for blockchain data
- Twitter API for social media metrics
- Robust error handling and fallback data
- Rate limiting and retry logic

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License - see LICENSE file for details.

## Support

For issues or questions, please contact the Uranus Token Team. 