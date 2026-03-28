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
  const fillColor = variant === 'dark' ? '#14213d' : '#f0ebe2'

  return (
    <span className={`flex items-center select-none ${sizeMap[size]}`}>
      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 800, color: fillColor, WebkitTextStroke: `2px ${fillColor}`, letterSpacing: '-0.05em' }}>
        [&thinsp;]
      </span>
    </span>
  )
}
