import { useState, useEffect } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
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

  return (
    <div className="steam-background">
      {windowVisible && (
        <div className="main-div">
          <UserProfile steamId="76561198048469138" />
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
