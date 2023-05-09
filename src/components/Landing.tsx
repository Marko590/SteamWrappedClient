import { Link, useNavigate } from "react-router-dom";
import Window from "./Window";
import "./styles/Landing.css";
import Button from "./Button";
import SteamInput from "./SteamInput";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="steam-background" style={{ justifyContent: "center" }}>
      <div className="main-div">
        <div style={{ alignSelf: "center", width: "100%", margin: 50 }}>
          <Window showTaskbar={true} title="Lookup a steamId"></Window>
        </div>
        <div style={{ width: "75%", alignSelf: "center" }}>
          <Window>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>STEAM ID FINDER</h1>

              <SteamInput type="number" />
              <Button
                text="Submit"
                onClicked={() => {
                  navigate("/user/76561198048469138");
                }}
              />
              <h5 style={{ textAlign: "center" }}>
                Copy your SteamID and check information about your profile. Your
                profile privacy settings must be set to public. See how here.
              </h5>
            </div>
          </Window>
        </div>
      </div>
    </div>
  );
}
