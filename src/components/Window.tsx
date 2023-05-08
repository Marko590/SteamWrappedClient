import { ReactNode } from "react";
import "./styles/Window.css";
import Taskbar from "./Taskbar";
interface Props {
  children: ReactNode;
  title?: string;
  showTaskbar?: boolean;
}

function Window({ title, children, showTaskbar }: Props) {
  return (
    <div className="steam-window">
      {showTaskbar && <Taskbar title={title} />}
      <div className="steam-window-content">{children}</div>
    </div>
  );
}

export default Window;
