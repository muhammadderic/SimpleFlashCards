interface ButtonProps {
  className?: string;
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, text }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;