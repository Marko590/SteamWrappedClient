import "./styles/CheckBox.css";

interface Props {
  title: string;
}

function CheckBox({ title }: Props) {
  return (
    <div className="steam-checkbox-div">
      <input type="checkbox" id="checkBox" name="checkBox" />
      <label htmlFor="checkBox">{title}</label>
    </div>
  );
}

export default CheckBox;
