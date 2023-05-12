import { ReactNode } from "react";
import "./styles/Window.css";
import Taskbar from "./Taskbar";
import NavBar from "./NavBar";
interface Props {
  children: ReactNode;
  title?: string;
  showTaskbar?: boolean;
  contentPadding?: boolean;
  isNavBar?: boolean;
}
Window.defaultProps = {
  contentPadding: true,
};
function Window({
  title,
  children,
  showTaskbar,
  contentPadding,
  isNavBar,
}: Props) {
  return (
    <div className={isNavBar ? "steam-window-navbar" : "steam-window"}>
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
