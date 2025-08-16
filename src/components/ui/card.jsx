export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-md p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children }) {
  return <div className="mb-2 font-semibold text-lg">{children}</div>
}

export function CardTitle({ children }) {
  return <h3 className="text-xl font-bold">{children}</h3>
}

export function CardContent({ children }) {
  return <div className="text-gray-700">{children}</div>
}
