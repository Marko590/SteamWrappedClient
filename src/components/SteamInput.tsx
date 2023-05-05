import "./styles/SteamInput.css";

interface Props {
  type: string;
  text: string;
  min?: number;
  max?: number;
}

function SteamInput({ type, min, max }: Props) {
  return <input className="text" type={type} min={min} max={max} />;
}

export default SteamInput;
