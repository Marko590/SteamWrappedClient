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

interface RecentGame {
  appId: number;
  allTime: number;
  twoWeeks: number;
  headerImage: string;
  name: string;
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

  function prepareGame(game: RecentGame) {
    return <p>{game.name}</p>;
  }
  const [recentGames, setRecentGames] = useState<RecentGame[]>();
  useEffect(() => {
    axios
      .get("https://localhost:7209/SteamStats/recent?steamId=76561198048469138")
      .then((response) => {
        setRecentGames(response.data);
      });
  }, []);

  return (
    <div className="steam-background">
      {windowVisible && (
        <>
          <Window showTaskbar={true} title="Steam">
            <div className="userProfile">
              <img className="imageLarge" src={user?.avatarUrl} />
              <p className="nameText">{user?.userName}</p>
              <div className="levelText">
                Level <div className="circle"> 144</div>{" "}
              </div>
            </div>
          </Window>
          <Window title="Steam">
            <div>
              <p className="nameText greyedOutText">Recent games</p>
              {recentGames && recentGames.map((game) => prepareGame(game))}
            </div>
          </Window>
        </>
      )}
    </div>
  );
}

export default App;
