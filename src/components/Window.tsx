import { ReactNode } from "react";
import "./styles/Window.css";
import Taskbar from "./Taskbar";
interface Props {
  children: ReactNode;
  title?: string;
  showTaskbar?: boolean;
  contentPadding?: boolean;
}
Window.defaultProps = {
  contentPadding: true,
};
function Window({ title, children, showTaskbar, contentPadding }: Props) {
  return (
    <div className="steam-window">
      {showTaskbar && <Taskbar title={title} />}
      <div
        className={
          contentPadding
            ? "steam-window-content"
            : "steam-window-content-no-padding"
        }
      >
        {children}
      </div>
    </div>
  );
}

export default Window;
