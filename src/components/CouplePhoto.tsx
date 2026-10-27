import { useState } from 'react'

type Props = {
  jpgName: string
  svgName: string
  alt: string
  className?: string
}

const base = import.meta.env.BASE_URL

export function CouplePhoto({ jpgName, svgName, alt, className = '' }: Props) {
  const [src, setSrc] = useState(`${base}images/${jpgName}`)

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => {
        setSrc(`${base}images/${svgName}`)
      }}
    />
  )
}
