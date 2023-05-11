import InsetBox from "./InsetBox";
import "./styles/FriendsCard.css";

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

enum Status {
  Offline = 0,
  Online,
  Busy,
  Away,
  Snooze,
  Unknown,
  Ingame,
}
interface Props {
  friend: Friend;
}

interface FriendStatus {
  color: string;
  stringStatus: string;
}

function getFriendStatus(friend: Friend) {
  var friendStatus: FriendStatus = { color: "a", stringStatus: "as" };
  switch (friend.status) {
    case Status.Offline:
      friendStatus.color = "#999999";
      friendStatus.stringStatus = "Offline";
      break;
    case Status.Online:
      friendStatus.color = "#1aacea";
      friendStatus.stringStatus = "Online";
      break;
    case Status.Busy:
      friendStatus.color = "#ff3300";
      friendStatus.stringStatus = "Busy";
      break;
    case Status.Away:
      friendStatus.color = "#d2ff2e";
      friendStatus.stringStatus = "Away";
      break;
    case Status.Snooze:
      friendStatus.color = "#d2ff2e";
      friendStatus.stringStatus = "Snooze";
      break;
    case Status.Unknown:
      friendStatus.color = "#999999";
      friendStatus.stringStatus = "Offline";
      break;
    case Status.Ingame:
      friendStatus.color = "#66ff66";
      friendStatus.stringStatus = "Ingame: " + friend.currentGameName;
      break;
  }
  return friendStatus;
}

function FriendsCard({ friend }: Props) {
  var friendStatus: FriendStatus = getFriendStatus(friend);
  return (
    <div className="card-container">
      <InsetBox>
        <div className="card-content">
          <img
            className="friend-profile-pic"
            style={{ borderColor: friendStatus.color }}
            src={friend.avatarUrl}
          />
          <div className="friend-status">
            <p style={{ color: friendStatus.color }}>{friend.userName}</p>
            <p style={{ color: friendStatus.color }}>
              {friendStatus.stringStatus}
            </p>
          </div>
        </div>
      </InsetBox>
    </div>
  );
}

export default FriendsCard;
