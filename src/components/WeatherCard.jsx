import React from 'react'

export default function WeatherCard({ data }) {
  const { name, sys, main, weather, wind } = data
  const icon = weather?.[0]?.icon
  const desc = weather?.[0]?.description
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null

  // Get weather emoji based on condition
  const getWeatherEmoji = (iconCode) => {
    if (iconCode?.includes('01')) return '☀️' // Clear
    if (iconCode?.includes('02')) return '⛅' // Few clouds
    if (iconCode?.includes('03') || iconCode?.includes('04')) return '☁️' // Clouds
    if (iconCode?.includes('09') || iconCode?.includes('10')) return '🌧️' // Rain
    if (iconCode?.includes('11')) return '⛈️' // Thunderstorm
    if (iconCode?.includes('13')) return '❄️' // Snow
    if (iconCode?.includes('50')) return '🌫️' // Mist
    return '🌤️' // Default
  }

  const weatherEmoji = getWeatherEmoji(icon)

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h2>
            📍 {name}, {sys?.country}
          </h2>
          <p className="desc">{desc} {weatherEmoji}</p>
        </div>
        {iconUrl && <img src={iconUrl} alt={desc} />}
      </div>

      <div className="card-body">
        <div className="temp">{Math.round(main?.temp)}°C</div>
        <div className="meta">
          <div className="meta-item">
            <div className="meta-icon">💧</div>
            <span>Humidity: {main?.humidity}%</span>
          </div>
          <div className="meta-item">
            <div className="meta-icon">🌪️</div>
            <span>Wind: {wind?.speed} m/s</span>
          </div>
          <div className="meta-item">
            <div className="meta-icon">🌡️</div>
            <span>Feels like: {Math.round(main?.feels_like)}°C</span>
          </div>
          <div className="meta-item">
            <div className="meta-icon">📊</div>
            <span>Pressure: {main?.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}
