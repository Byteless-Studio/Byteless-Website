interface CalButtonProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function CalButton({ className, children, onClick }: CalButtonProps) {
  return (
    <button
      data-cal-link="byteless-software-studio-ifafgq/30min"
      data-cal-namespace="30min"
      data-cal-config='{"layout":"month_view"}'
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
