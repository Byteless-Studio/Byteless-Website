interface CalButtonProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function CalButton({ className, children, onClick }: CalButtonProps) {
  return (
    <button
      data-cal-link="byteless-software-studio-ifafgq/let-s-talk"
      data-cal-namespace="let-s-talk"
      data-cal-config='{"layout":"month_view"}'
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
