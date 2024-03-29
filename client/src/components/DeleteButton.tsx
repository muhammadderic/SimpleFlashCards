import "../styles/deletebutton.css";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button type="button" className="delete-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;