import "./styles/SteamInput.css";

interface Props {
  type: string;
  text: string;
}

function SteamInput({ type }: Props) {
  return <input className="text" type={type} min={10} max={21} />;
}

export default SteamInput;
