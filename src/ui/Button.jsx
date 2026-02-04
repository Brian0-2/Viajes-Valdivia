
export default function Button({onClick, children, className,type}) {
  return (
    <button type={type} onClick={onClick} className={`${className} cursor-pointer`}>
      {children}
    </button>
  )
}
