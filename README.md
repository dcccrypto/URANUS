# Uranus Analytics Dashboard

A professional blockchain analytics dashboard for the Uranus token, featuring real-time data from Solana Tracker API and Twitter API integration.

## Features

- **Real-time Market Data**: Live price, volume, and market cap from Solana Tracker API
- **Holder Analytics**: Real top holders data with daily growth tracking
- **Community Metrics**: Twitter followers and X Community members with growth indicators
- **Professional UI**: Clean, modern design with smooth animations
- **Responsive Design**: Works on all devices and screen sizes

## Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Connect to GitHub**: Link your GitHub repository to Vercel
2. **Automatic Deployment**: Vercel will automatically detect the configuration
3. **Environment Variables**: No additional setup required

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
- **Token Data**: Real-time token information and market metrics
- **Holder Data**: Top wallet addresses and balances
- **Rate Limiting**: Built-in rate limiting to respect API limits

### Twitter API
- **Followers Count**: Real-time Twitter follower count
- **Community Members**: X Community member tracking
- **Growth Tracking**: Daily growth calculations with historical data

## File Structure

```
├── index.html          # Main dashboard HTML
├── styles.css          # Professional styling and animations
├── script.js           # Frontend JavaScript with API integration
├── server.js           # Local development server
├── api/
│   └── dashboard-data.js  # Vercel API route for dashboard data
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment configuration
└── README.md           # This file
```

## Configuration

### API Keys
The dashboard uses the following APIs:
- **Solana Tracker**: `dc86d4a1-3eb1-4174-9b0e-7134c77e9d35`
- **Twitter API**: `183c85c65480451da0ef6d993754e76c`

### Contract Address
- **Uranus Token**: `BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups`

## Features

### Real-time Data
- Live market cap and volume updates
- Real-time holder count tracking
- Daily growth rate calculations
- Community engagement metrics

### Professional Design
- Clean, modern interface
- Smooth animations and transitions
- Responsive layout for all devices
- Professional color scheme and typography

### Error Handling
- Graceful fallback to mock data
- User-friendly error notifications
- Rate limiting protection
- Network resilience

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **APIs**: Solana Tracker, Twitter API
- **Deployment**: Vercel
- **Styling**: Custom CSS with modern design principles

## License

MIT License - see LICENSE file for details.

## Support

For questions or issues, please refer to the project documentation or create an issue in the repository. 