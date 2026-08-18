import React from 'react'

export default function WeatherCard({ data }) {
  const { name, sys, main, weather, wind } = data
  const icon = weather?.[0]?.icon
  const desc = weather?.[0]?.description
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h2>
            {name}, {sys?.country}
          </h2>
          <p className="desc">{desc}</p>
        </div>
        {iconUrl && <img src={iconUrl} alt={desc} />}
      </div>

      <div className="card-body">
        <div className="temp">{Math.round(main?.temp)}°C</div>
        <div className="meta">
          <div>Humidity: {main?.humidity}%</div>
          <div>Wind: {wind?.speed} m/s</div>
        </div>
      </div>
    </div>
  )
}
