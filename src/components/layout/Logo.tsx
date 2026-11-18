interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  /** 'dark' = navy, 'light' = cream (on dark backgrounds), 'blue' = the Byteless blue */
  variant?: 'dark' | 'light' | 'blue'
}

const sizeMap = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-4xl',
}

export function Logo({ size = 'md', variant = 'dark' }: LogoProps) {
  const fillColor = { dark: '#14213d', light: '#f0ebe2', blue: '#164baa' }[variant]

  return (
    <span className={`flex items-center select-none ${sizeMap[size]}`}>
      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontWeight: 800, color: fillColor, WebkitTextStroke: `2px ${fillColor}`, letterSpacing: '-0.05em' }}>
        [&thinsp;]
      </span>
    </span>
  )
}
