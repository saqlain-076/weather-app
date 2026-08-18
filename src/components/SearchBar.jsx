import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('')

  function submit(e) {
    e.preventDefault()
    if (!q.trim()) return
    onSearch(q.trim())
  }

  return (
    <form className="search" onSubmit={submit}>
      <input
        aria-label="City"
        placeholder="🌍 Enter city name (e.g. London, New York, Karachi)"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button type="submit">
        🔍 Search Weather
      </button>
    </form>
  )
}
