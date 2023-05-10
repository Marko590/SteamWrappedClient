import { useNavigate } from "react-router-dom";
import Window from "./Window";
import "./styles/Landing.css";
import Button from "./Button";
import { useState } from "react";
import SteamInput from "./SteamInput";

import NavBar from "./NavBar";

export default function Landing() {
  const navigate = useNavigate();
  const [steamId, setSteamId] = useState("");
  const handleChange = (e: any) => {
    setSteamId(e.target.value);
  };

  return (
    <div className="steam-background" style={{ justifyContent: "center" }}>
      <div className="main-div">
        <NavBar />
        <div style={{ alignSelf: "center", width: "100%", margin: 50 }}></div>
        <div style={{ width: "90%", alignSelf: "center" }}>
          <Window>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>STEAM ID FINDER</h1>
              <select>
                <option value="asd">asd</option>
              </select>
              <SteamInput type="number" onChange={handleChange} />
              <Button
                text="Submit"
                onClicked={() => {
                  navigate("/user/" + steamId);
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
