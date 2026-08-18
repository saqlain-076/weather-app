# Weather App (React + Vite)

Simple responsive weather app that lets users search by city and view current weather.

## Features
- Search weather by city name
- Displays city, temperature, condition, humidity, wind speed, and icon
- Loading and error states
- Responsive design

## Setup
1. Copy `.env.example` to `.env` and set `VITE_OPENWEATHER_API_KEY`.

```
cp .env.example .env
# then edit .env and paste your API key
```

2. Install dependencies and run dev server:

```bash
npm install
npm run dev
```

3. Build for production:

```bash
npm run build
npm run preview
```

## Deployment
- Push this repository to GitHub.
- Deploy using Vercel or Netlify and set the environment variable `VITE_OPENWEATHER_API_KEY` in the platform settings.

## Notes
This project uses the OpenWeatherMap Current Weather API. Get an API key at https://openweathermap.org/api
