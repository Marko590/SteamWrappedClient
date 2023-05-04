import "./styles/Taskbar.css";

interface Props {
  title?: String;
}
function Taskbar({ title }: Props) {
  return (
    <div className="steam-window-taskbar">
      <div className="steam-window-title">
        <img
          className="steam-title-logo"
          src="https://xventi.github.io/vgui.css/styles/greensteam/steamico.png"
        />
        <p>{title}</p>
      </div>
      <div className="steam-button-container">
        <button className="steam-button-taskbar">-</button>
        <button className="steam-button-taskbar">X</button>
      </div>
    </div>
  );
}

export default Taskbar;
