# 🌤️ Weather Pro - Professional Weather Application

A beautiful, modern, and fully responsive weather application built with **React.js** that provides real-time weather information for any city worldwide.

![Weather Pro](https://img.shields.io/badge/Weather-Pro-blue?style=for-the-badge&logo=weather&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🌟 Features

### ✨ Core Features
- 🔍 **City Weather Search** - Search weather for any city worldwide
- 🌡️ **Complete Weather Data** - Temperature, humidity, wind speed, pressure
- 🌈 **Weather Icons** - Dynamic weather icons from OpenWeatherMap
- ⏰ **Live Clock** - Real-time date and time display
- 📱 **Responsive Design** - Perfect on mobile, tablet, and desktop
- ⚡ **Loading States** - Smooth loading animations
- ❌ **Error Handling** - User-friendly error messages

### 🎨 Design Highlights
- 🌈 **Modern Gradient Background** - Purple to blue gradient with animated particles
- 💎 **Glass-morphism UI** - Transparent cards with backdrop blur effects
- 🎭 **Smooth Animations** - Hover effects and transitions throughout
- 🔤 **Professional Typography** - Inter font with gradient text effects
- 📱 **Mobile-First Design** - Optimized for all screen sizes

### 🔧 Technical Features
- ⚛️ **React 18** - Modern React with hooks
- ⚡ **Vite** - Lightning fast build tool
- 🏗️ **Component Architecture** - Reusable and maintainable components
- 🌐 **API Integration** - OpenWeatherMap API
- 🔒 **Environment Variables** - Secure API key management
- 🎯 **SEO Optimized** - Meta tags and proper HTML structure

## 🚀 Live Demo

**Local Development:** `http://localhost:5173/`

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key

### 1. Clone the Repository
```bash
git clone https://github.com/saqlain-076/weather-app.git
cd weather-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
1. Copy `.env.example` to `.env`
2. Get your API key from [OpenWeatherMap](https://openweathermap.org/api)
3. Add your API key to `.env`:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx      # Search input component
│   │   ├── WeatherCard.jsx    # Weather display component
│   │   └── Clock.jsx          # Live clock component
│   ├── App.jsx                # Main application component
│   ├── main.jsx              # Application entry point
│   └── styles.css            # Global styles and animations
├── public/
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## 🎯 Component Architecture

### `App.jsx`
- Main application component
- Manages weather data state
- Handles API calls and error states

### `SearchBar.jsx`
- City search input with validation
- Form submission handling
- Professional styling with emojis

### `WeatherCard.jsx`
- Weather data display
- Temperature, humidity, wind speed, pressure
- Weather icons and condition descriptions

### `Clock.jsx`
- Real-time clock display
- Date and time formatting
- Auto-updating every second

## 🌐 API Integration

This app uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current) to fetch:

- Current temperature (Celsius)
- Weather conditions and descriptions
- Humidity percentage
- Wind speed (m/s)
- Atmospheric pressure (hPa)
- Weather icons

## 🎨 Styling & Design

- **CSS Framework:** Custom CSS with modern techniques
- **Design System:** Glass-morphism with gradient backgrounds
- **Typography:** Inter font family
- **Animations:** CSS keyframes and transitions
- **Responsive:** Mobile-first approach with breakpoints
- **Color Scheme:** Purple to blue gradients with white accents

## 📱 Responsive Breakpoints

- **Mobile:** < 480px
- **Tablet:** 481px - 768px  
- **Desktop:** > 768px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add `VITE_OPENWEATHER_API_KEY` in environment variables
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Add environment variables in site settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m "Add new feature"`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Saqlain** - [GitHub Profile](https://github.com/saqlain-076)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data API
- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for fast build tooling
- [Inter Font](https://fonts.google.com/specimen/Inter) for beautiful typography

---

⭐ **Star this repository if you found it helpful!**
