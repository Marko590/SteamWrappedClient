import InsetBox from "./InsetBox";
import "./styles/RecentGameCard.css";

interface Props {
  onClicked: () => void;
  text: string;
  game: RecentGame;
}
interface RecentGame {
  appId: number;
  allTime: number;
  twoWeeks: number;
  headerImage: string;
  name: string;
}
function RecentGameCard({ onClicked, text, game }: Props) {
  return (
    <InsetBox>
      <div className="steam-game-card">
        <div className="steam-game-left-side">
          <img src={game.headerImage} />
          <a href={"https://store.steampowered.com/app/" + game.appId}>
            {game.name}
          </a>
        </div>
        <div className="steam-game-right-side">
          <p className="greyedOutText">
            {(game.allTime / 60).toFixed(1)} hrs on record
            <br />
            {(game.twoWeeks / 60).toFixed(1)} hrs on record past two weeks
          </p>
        </div>
      </div>
    </InsetBox>
  );
}

export default RecentGameCard;
