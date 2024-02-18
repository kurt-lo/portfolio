const Button = ({ children, className, icon, ...props }) => {
  return (
    <button className={`btn btn-primary ${className}`}  {...props}>
      {icon}
      {children}
    </button>
  )
}

export default Button