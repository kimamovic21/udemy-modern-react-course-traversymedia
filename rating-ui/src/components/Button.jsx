const Button = ({
  children,
  onClick,
  className,
  disabled = false
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;