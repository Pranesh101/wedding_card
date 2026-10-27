import { useEffect, useState } from 'react'

const EVENT = new Date('2026-11-14T19:00:00+05:30').getTime()

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, EVENT - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Mins' },
  { key: 'seconds', label: 'Secs' },
]

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = window.setInterval(() => setTime(getTimeLeft()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="countdown" aria-label="Countdown to the reception">
      {UNITS.map(({ key, label }) => (
        <div key={key} className="countdown__unit">
          <span className="countdown__value">{String(time[key]).padStart(2, '0')}</span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  )
}
