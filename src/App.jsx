import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Clock from './components/Clock'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

export default function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchWeather(city) {
    setLoading(true)
    setError('')
    setWeather(null)
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      )
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.message || 'City not found')
      }
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header>
        <h1>Weather Pro</h1>
        <p className="subtitle">Get real-time weather information for any city worldwide</p>
        <Clock />
      </header>
      <main>
        <SearchBar onSearch={fetchWeather} />

        {loading && (
          <div className="info">
            🌤️ Getting weather data...
          </div>
        )}
        
        {error && (
          <div className="error">
            ❌ {error}
          </div>
        )}
        
        {weather && <WeatherCard data={weather} />}

        <footer>
          <small>Powered by OpenWeatherMap API • Made with ❤️</small>
        </footer>
      </main>
    </div>
  )
}
