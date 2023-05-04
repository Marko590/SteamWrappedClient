import { ReactNode } from "react";
import "./styles/InsetBox.css";
interface Props {
  children: ReactNode;
  cornerRadius?: number;
}

function InsetBox({ children }: Props) {
  return <div className="steam-inset-box">{children}</div>;
}

export default InsetBox;
