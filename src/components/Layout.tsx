import NavBar from "./NavBar";
import { ReactNode } from "react";
import "./styles/Layout.css";

interface Props {
  children: ReactNode;
}
function Layout({ children }: Props) {
  return (
    <div className="steam-background">
      <NavBar />
      <div className="main-div">{children}</div>
    </div>
  );
}

export default Layout;
