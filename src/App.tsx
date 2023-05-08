import "./App.css";
import UserProfile from "./components/UserProfile";
import GameWindow from "./components/GameWindow";
import FriendWindow from "./components/FriendWindow";

function App() {
  return (
    <div className="steam-background">
      <div className="main-div">
        <UserProfile steamId="76561198048469138" />
        <div className="friends-and-games">
          <GameWindow steamId="76561198048469138" />
          <FriendWindow steamId="76561198048469138" numberOfFriends={7} />
        </div>
      </div>
    </div>
  );
}

export default App;
