import RecentGameCard from "./RecentGameCard";
import Window from "./Window";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/GameWindow.css";
interface RecentGame {
  appId: number;
  allTime: number;
  twoWeeks: number;
  headerImage: string;
  name: string;
}
interface Props {
  steamId: string;
}
function GameWindow({ steamId }: Props) {
  const [recentGames, setRecentGames] = useState<RecentGame[]>();
  useEffect(() => {
    axios
      .get("https://localhost:7209/SteamStats/recent?steamId=" + steamId)
      .then((response) => {
        setRecentGames(response.data);
      });
  }, []);
  return (
    <div className="games-window">
      <Window showTaskbar={false}>
        <p className="titleText greyedOutText">Recent games</p>
        {recentGames &&
          recentGames.map((game) => <RecentGameCard game={game} />)}
      </Window>
    </div>
  );
}

export default GameWindow;
