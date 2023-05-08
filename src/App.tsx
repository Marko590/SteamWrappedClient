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
import UserProfile from "./components/UserProfile";
import FriendsCard from "./components/FriendsCard";
import GameWindow from "./components/GameWindow";
import FriendWindow from "./components/FriendWindow";

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
          <UserProfile steamId={76561198048469138} />
          <div className="friends-and-games">
            <GameWindow steamId="76561198048469138" />
            <FriendWindow steamId="76561198048469138" numberOfFriends={7} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
