import { useState, useEffect } from "react";
import "./App.css";
import Window from "./components/Window";
import InsetBox from "./components/InsetBox";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import SteamInput from "./components/SteamInput";
import axios from "axios";
import React from "react";
import RecentGameCard from "./components/RecentGameCard";

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

interface Friend {
  userName: string;
  avatarUrl: string;
  steamId: number;
  relationship: string;
  friendsSince: Date;
  currentGameName: string;
  currentGameId: string;
  status: number;
  lastLoggedOff: Date;
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

  const [recentGames, setRecentGames] = useState<RecentGame[]>();
  useEffect(() => {
    axios
      .get("https://localhost:7209/SteamStats/recent?steamId=76561198048469138")
      .then((response) => {
        setRecentGames(response.data);
      });
  }, []);

  const [friends, setFriends] = useState<Friend[]>();
  useEffect(() => {
    axios
      .get(
        "https://localhost:7209/SteamStats/friends?steamId=76561198048469138&numberOfFriends=10"
      )
      .then((response) => {
        setFriends(response.data);
      });
  }, []);

  return (
    <div className="steam-background">
      {windowVisible && (
        <div className="main-div">
          <Window showTaskbar={true} title="Steam">
            <div className="userProfile">
              <img className="imageLarge" src={user?.avatarUrl} />
              <p className="nameText">{user?.userName}</p>
              <div className="levelText">
                Level <div className="circle"> 144</div>{" "}
              </div>
            </div>
          </Window>
          <div
            className="games-and-friends-container"
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
          >
            <div className="games-window">
              <Window>
                <div className="steam-recent-games">
                  <p className="nameText greyedOutText">Recent games</p>
                  <div className="recent-game-holder">
                    {recentGames &&
                      recentGames.map((game) => <RecentGameCard game={game} />)}
                  </div>
                </div>
              </Window>
            </div>
            <div className="friends-window">
              <Window>
                {friends && friends.map((friend) => <p>{friend.userName}</p>)}
              </Window>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
