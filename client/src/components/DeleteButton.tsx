import "../styles/deletebutton.css";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const DeleteButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button type="button" className="delete-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default DeleteButton;