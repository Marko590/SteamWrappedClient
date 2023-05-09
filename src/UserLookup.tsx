import "./UserLookup.css";
import UserProfile from "./components/UserProfile";
import GameWindow from "./components/GameWindow";
import FriendWindow from "./components/FriendWindow";
import { useParams } from "react-router-dom";
function UserLookup() {
  const { steamId } = useParams();
  return (
    <div className="steam-background">
      <div className="main-div">
        <UserProfile steamId={steamId?.toString()} />
        <div className="friends-and-games">
          <GameWindow steamId={steamId?.toString()} />
          <FriendWindow steamId={steamId?.toString()} numberOfFriends={7} />
        </div>
      </div>
    </div>
  );
}

export default UserLookup;
