type Corner = 'top-right' | 'bottom-left'

type Props = {
  corner: Corner
  className?: string
}

export function FloralCorner({ corner, className = '' }: Props) {
  const flip = corner === 'bottom-left'
  const id = corner.replace('-', '')

  return (
    <svg
      className={`floral-corner floral-corner--${corner} ${className}`}
      viewBox="0 0 220 220"
      aria-hidden
      style={flip ? { transform: 'scale(-1, -1)' } : undefined}
    >
      <defs>
        <radialGradient id={`roseGrad-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8d4ff" />
          <stop offset="100%" stopColor="#a878c9" />
        </radialGradient>
        <radialGradient id={`leafGrad-${id}`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#7a9a6a" />
          <stop offset="100%" stopColor="#3d5c48" />
        </radialGradient>
      </defs>
      <ellipse cx="140" cy="60" rx="38" ry="32" fill={`url(#roseGrad-${id})`} opacity="0.92" />
      <ellipse cx="175" cy="95" rx="28" ry="24" fill={`url(#roseGrad-${id})`} opacity="0.85" />
      <ellipse cx="95" cy="85" rx="22" ry="20" fill="#c9a8e8" opacity="0.8" />
      <path
        d="M 20 180 Q 80 120 160 40 Q 120 100 20 180 Z"
        fill={`url(#leafGrad-${id})`}
        opacity="0.75"
      />
      <path
        d="M 60 200 Q 100 140 180 70 Q 140 130 60 200 Z"
        fill="#5a7a62"
        opacity="0.55"
      />
      <circle cx="45" cy="45" r="3" fill="#d4b040" opacity="0.75" />
      <circle cx="65" cy="35" r="2" fill="#d4b040" opacity="0.55" />
      <circle cx="55" cy="60" r="2.5" fill="#b896e8" opacity="0.65" />
    </svg>
  )
}
