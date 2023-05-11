import Window from "./Window";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/UserProfile.css";

interface Props {
  steamId?: string;
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
      .get("https://localhost:7209/SteamStats?steamId=" + steamId)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  return (
    <Window showTaskbar={true} title="Steam">
      <div className="userProfile">
        <div className="profile-left-side">
          <img className="imageLarge" src={user?.avatarUrl} />
          <p className="nameText">{user?.userName}</p>
        </div>
        <div className="profile-right-side">
          <div className="levelText">
            Level <div className="circle"> {user?.playerLevel}</div>
          </div>
          <div className="levelText">
            {user?.lastLoggedOf === null
              ? "Online"
              : "Last logged on: " + user?.lastLoggedOf.toDateString()}
          </div>
        </div>
      </div>
    </Window>
  );
}

export default UserProfile;
