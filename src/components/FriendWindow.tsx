import { useState, useEffect } from "react";
import Window from "./Window";
import axios from "axios";
import FriendsCard from "./FriendsCard";
import "./styles/FriendWindow.css";

interface Props {
  steamId: string;
  numberOfFriends: number;
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

function FriendWindow({ steamId, numberOfFriends }: Props) {
  const [friends, setFriends] = useState<Friend[]>();
  useEffect(() => {
    axios
      .get(
        "https://localhost:7209/SteamStats/friends?steamId=" +
          steamId +
          "&numberOfFriends=" +
          numberOfFriends.toString()
      )
      .then((response) => {
        setFriends(response.data);
      });
  }, []);

  return (
    <div className="friends-window">
      <Window>
        <div>
          <p className="titleText greyedOutText">Friends</p>
          {friends && friends.map((friend) => <FriendsCard friend={friend} />)}
        </div>
      </Window>
    </div>
  );
}
export default FriendWindow;
