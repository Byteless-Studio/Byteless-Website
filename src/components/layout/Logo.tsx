interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  /** 'dark' = filled navy + outlined navy (on cream bg), 'light' = filled cream + outlined cream (on navy bg) */
  variant?: 'dark' | 'light'
}

const sizeMap = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-4xl',
}

export function Logo({ size = 'md', variant = 'dark' }: LogoProps) {
  const fillColor   = variant === 'dark' ? '#14213d' : '#f0ebe2'
  const strokeColor = variant === 'dark' ? '#14213d' : '#f0ebe2'

  return (
    <span className={`flex items-baseline select-none font-playfair tracking-tight ${sizeMap[size]}`}>
      <span style={{ fontWeight: 900, color: fillColor }}>
        [ ]
      </span>
      <span
        style={{ fontWeight: 700, WebkitTextStroke: `1.5px ${strokeColor}`, color: 'transparent' }}
      > 
        
      </span>
    </span>
  )
}
