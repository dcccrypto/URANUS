import fetch from 'node-fetch';

// Solana Tracker API configuration
const SOLANA_TRACKER_API_KEY = process.env.SOLANA_TRACKER_API_KEY || 'dc86d4a1-3eb1-4174-9b0e-7134c77e9d35';
const BASE_URL = 'https://data.solanatracker.io';

// Helper function to make API calls
async function makeSolanaTrackerRequest(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            headers: {
                'x-api-key': SOLANA_TRACKER_API_KEY,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // Test API connection with a simple request
        const credits = await makeSolanaTrackerRequest('/credits');
        
        res.json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            apiCredits: credits.credits,
            message: 'Solana Tracker API is working correctly'
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'unhealthy',
            timestamp: new Date().toISOString(),
            error: error.message,
            message: 'API connection failed - using mock data'
        });
    }
} 