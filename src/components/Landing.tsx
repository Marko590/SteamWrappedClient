import { Link, useNavigate } from "react-router-dom";
import Window from "./Window";
import "./styles/Landing.css";
import Button from "./Button";
import { useState, useEffect } from "react";
import SteamInput from "./SteamInput";
import ReactDropdown from "react-dropdown";
import HoverDropdown from "./HoverDropdown";

export default function Landing() {
  const navigate = useNavigate();
  const [steamId, setSteamId] = useState("");
  const handleChange = (e: any) => {
    setSteamId(e.target.value);
  };

  interface Props {
    options: Option[];
  }
  interface Option {
    text: string;
    value: string;
    link: string;
  }
  var options: Option[] = [
    { text: "1", value: "1", link: "asdf" },
    { text: "2", value: "2", link: "asdf" },
    { text: "3", value: "3", link: "asdf" },
  ];
  return (
    <div className="steam-background" style={{ justifyContent: "center" }}>
      <div className="main-div">
        <div style={{ alignSelf: "center", width: "100%", margin: 50 }}>
          <Window showTaskbar={true} title="Lookup a steamId"></Window>
        </div>
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
              <HoverDropdown options={options} />
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
