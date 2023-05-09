import "./styles/SteamInput.css";

interface Props {
  type: string;
  text?: string;
  min?: number;
  max?: number;
  onChange?: (item: any) => void;
}

function SteamInput({ type, min, max, onChange }: Props) {
  return (
    <input
      className="text"
      type={type}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
}

export default SteamInput;
