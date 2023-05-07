import { useState, useEffect } from "react";
import "./App.css";
import Window from "./components/Window";
import InsetBox from "./components/InsetBox";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import SteamInput from "./components/SteamInput";
import axios from "axios";
import React from "react";

interface User {
  userName: string;
  realName: string;
  lastLoggedOf: Date;
  avatarUrl: string;
  status: number;
  playerLevel: number;
}

function App() {
  const [windowVisible, setWindowVisibility] = useState(true);
  const [user, setUser] = useState<User>();
  useEffect(() => {
    axios
      .get("https://localhost:7209/SteamStats?steamId=76561198048469138")
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  return (
    <div className="steam-background">
      {windowVisible && (
        <Window showTaskbar={true} title="Steam">
          <h2>Title</h2>
          <h5>July 29,2023</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr></hr>
          <p>{user?.userName}</p>
        </Window>
      )}
    </div>
  );
}

export default App;
