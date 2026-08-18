import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

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
        <h1>Weather App</h1>
      </header>
      <main>
        <SearchBar onSearch={fetchWeather} />

        {loading && <div className="info">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {weather && <WeatherCard data={weather} />}

        <footer>
          <small>Powered by OpenWeatherMap</small>
        </footer>
      </main>
    </div>
  )
}
