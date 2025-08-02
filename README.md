# 🪐 Uranus Token Website

A beautiful, professional space-themed website for the Uranus Solana memecoin with 3D parallax animations and interactive features.

## 🌟 Features

- **Space Theme**: Beautiful dark blue and white space theme with animated stars and nebula effects
- **3D Parallax Animations**: Smooth parallax scrolling effects with floating asteroids and comets
- **Interactive Uranus Planet**: 3D rotating planet with rings that responds to mouse movement
- **Real-time Stats**: Token statistics display with mock data (ready for Helius API integration)
- **Responsive Design**: Fully responsive design that works on all devices
- **Smooth Animations**: Typing effects, particle systems, and smooth transitions
- **Professional UI**: Modern, clean interface with glassmorphism effects

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Helius API key for real token data

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Enjoy the Uranus experience! 🪐

### File Structure

```
uranus/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#4facfe to #00f2fe)
- **Secondary**: White (#ffffff)
- **Background**: Dark space theme (#0a0a0a to #16213e)
- **Accent**: Purple (#667eea)

### Animations
- Rotating Uranus planet with rings
- Floating asteroids and comets
- Twinkling stars background
- Particle system effects
- Typing animation for hero title
- Smooth parallax scrolling

## 🔧 Customization

### Adding Real Token Data

To integrate with Helius API for real token statistics:

1. Get a Helius API key from [helius.xyz](https://helius.xyz)
2. Replace `YOUR_HELIUS_API_KEY` in `script.js` with your actual API key
3. Uncomment the `fetchHeliusData()` function call
4. Customize the data processing in the `fetchHeliusData()` function

### Modifying Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4facfe;
    --secondary-color: #00f2fe;
    --accent-color: #667eea;
    --background-dark: #0a0a0a;
    --background-light: #16213e;
}
```

### Updating Contract Address

The contract address is set in multiple places:
- `index.html` (display)
- `script.js` (copy function and Jupiter link)

## 🎯 Interactive Features

- **Copy Contract**: One-click contract address copying
- **Jupiter Integration**: Direct link to trade on Jupiter
- **Smooth Navigation**: Smooth scrolling between sections
- **Mouse Interaction**: Planet responds to mouse movement
- **Keyboard Easter Eggs**: Press 'U' for a surprise!

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-optimized navigation
- Responsive grid layouts
- Touch-friendly buttons
- Optimized animations for mobile devices

## 🌌 Space Theme Elements

- **Animated Stars**: Multiple layers of twinkling stars
- **Floating Elements**: Asteroids and comets with realistic trajectories
- **Solar System**: Interactive solar system animation in About section
- **Particle Effects**: Dynamic particle system in background
- **Glassmorphism**: Modern glass-like UI elements

## 🚀 Performance Optimizations

- Efficient CSS animations using transform and opacity
- Optimized particle system with limited particle count
- Lazy loading for animations
- Smooth scrolling with hardware acceleration

## 🎨 Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new animations
- Improving performance
- Adding more interactive features
- Enhancing the space theme

## 🪐 About Uranus Token

Uranus is a Solana memecoin launched on Jupiter Studio. The token combines humor with professional design, featuring:

- **Contract**: BFgdzMkTPdKKJeTipv2njtDEwhKxkgFueJQfJGt1jups
- **Network**: Solana
- **Launch Platform**: Jupiter Studio
- **Theme**: Space and planetary exploration

## 🎉 Special Features

- **Confetti Effect**: Triggered on button clicks
- **Notification System**: Beautiful toast notifications
- **Loading Screen**: Animated loading with Uranus theme
- **Easter Eggs**: Hidden interactive elements throughout the site

---

*To the moon and beyond! 🚀🪐* 