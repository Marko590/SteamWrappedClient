import { useState, useEffect } from "react";
import "./App.css";
import Window from "./components/Window";
import axios from "axios";
import RecentGameCard from "./components/RecentGameCard";
import UserProfile from "./components/UserProfile";
import FriendsCard from "./components/FriendsCard";

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
        "https://localhost:7209/SteamStats/friends?steamId=76561198048469138&numberOfFriends=8"
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
            <div className="games-window">
              <Window showTaskbar={false}>
                <div>
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
                <div>
                  <p className="nameText greyedOutText">Friends</p>
                  {friends &&
                    friends.map((friend) => <FriendsCard friend={friend} />)}
                </div>
              </Window>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
