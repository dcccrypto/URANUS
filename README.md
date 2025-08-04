# Uranus Analytics Dashboard

A professional blockchain analytics dashboard for the Uranus token, featuring real-time data from Solana Tracker API and Twitter API integration.

## Features

- **Real-time Blockchain Data**: Live market cap, volume, holders, and price data
- **Top Holders Tracking**: Real Solana wallet data from Solana Tracker API
- **Community Metrics**: Twitter followers and X Community members with daily growth tracking
- **Professional UI**: Clean, modern design with smooth animations
- **Responsive Design**: Works on all devices
- **Real-time Updates**: Auto-refresh functionality

## Deployment

### Vercel Deployment

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository
2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the Node.js configuration

3. **Environment Variables** (Optional):
   - `HELIUS_API_KEY`: Your Helius API key (if using Helius features)

4. **Deploy**: Vercel will automatically deploy using the configuration in `vercel.json`

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## API Integration

### Solana Tracker API
- **Endpoint**: `https://data.solanatracker.io`
- **Features**: Real token data, holder information, market metrics
- **Rate Limiting**: Built-in rate limiting for API calls

### Twitter API
- **Endpoint**: `https://api.twitterapi.io`
- **Features**: Twitter followers and X Community member counts
- **Growth Tracking**: Daily growth calculation and display

## Project Structure

```
URANUS/
├── index.html          # Main dashboard HTML
├── styles.css          # Professional styling
├── script.js           # Frontend functionality
├── server.js           # Node.js Express server
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment config
└── .env               # Environment variables
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **APIs**: Solana Tracker API, Twitter API
- **Deployment**: Vercel
- **Styling**: Custom CSS with modern design principles

## License

MIT License - see LICENSE file for details. 