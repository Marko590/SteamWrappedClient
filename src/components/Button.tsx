import "./styles/Button.css";
interface Props {
  onClicked: () => void;
  text: string;
}

function Button({ onClicked, text }: Props) {
  return (
    <button className="steam-button" onClick={onClicked}>
      {text}
    </button>
  );
}

export default Button;
