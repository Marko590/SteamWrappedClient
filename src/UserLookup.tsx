import "./UserLookup.css";
import UserProfile from "./components/UserProfile";
import GameWindow from "./components/GameWindow";
import FriendWindow from "./components/FriendWindow";
import { useParams } from "react-router-dom";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
function UserLookup() {
  const { steamId } = useParams();
  return (
    <Layout>
      <UserProfile steamId={steamId?.toString()} />
      <div className="friends-and-games">
        <GameWindow steamId={steamId?.toString()} />
        <FriendWindow steamId={steamId?.toString()} numberOfFriends={7} />
      </div>
    </Layout>
  );
}

export default UserLookup;
