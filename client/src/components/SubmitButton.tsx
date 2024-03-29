import "../styles/submitbutton.css";

interface ButtonProps {
  text: string;
}

const SubmitButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button type="submit" className="button">
      {text}
    </button>
  );
};

export default SubmitButton;
