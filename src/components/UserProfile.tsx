import Window from "./Window";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/UserProfile.css";

interface Props {
  steamId: number;
}

interface User {
  userName: string;
  realName: string;
  lastLoggedOf: Date;
  avatarUrl: string;
  status: number;
  playerLevel: number;
}

function UserProfile({ steamId }: Props) {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    axios
      .get("https://localhost:7209/SteamStats?steamId=76561198048469138")
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  return (
    <Window showTaskbar={true} title="Steam">
      <div className="userProfile">
        <img className="imageLarge" src={user?.avatarUrl} />
        <p className="nameText">{user?.userName}</p>
        <div className="levelText">
          Level <div className="circle"> 144</div>{" "}
        </div>
      </div>
    </Window>
  );
}

export default UserProfile;
