import HoverDropdown from "./HoverDropdown";
import Window from "./Window";
import "./styles/NavBar.css";
import { useNavigate } from "react-router-dom";
interface Option {
  text: string;
  value: string;
  link?: string;
}

function NavBar() {
  var options: Option[] = [
    { text: "112112121212", value: "1", link: "1" },
    { text: "2", value: "2", link: "2" },
    { text: "3", value: "3" },
  ];
  const navigate = useNavigate();
  return (
    <Window contentPadding={false} showTaskbar={false}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          margin: "0",
          minHeight: "75px",
        }}
      >
        <div onClick={() => navigate("/")} className="navbar-item">
          <p>Home</p>
        </div>
        <div onClick={() => navigate("/about")} className="navbar-item">
          <p>About</p>
        </div>
        <div onClick={() => navigate("/game-list")} className="navbar-item">
          <p>Detailed Game List</p>
        </div>

        <HoverDropdown options={options} containsLinks={true} />
      </div>
    </Window>
  );
}
NavBar;
export default NavBar;
