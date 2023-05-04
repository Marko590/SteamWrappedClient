import { useState } from "react";
import "./App.css";
import Window from "./components/Window";
import InsetBox from "./components/InsetBox";
import Button from "./components/Button";

function App() {
  const [windowVisible, setWindowVisibility] = useState(true);
  return (
    <div className="steam-background">
      {windowVisible && (
        <Window showTaskbar={true} title="Steam">
          <h2>Title</h2>
          <h5>July 29,2023</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr></hr>
          <p>
            Here is a <a href="https://google.com">link example</a>
          </p>
        </Window>
      )}

      <Window showTaskbar={false} title="Steam">
        <h1>Heading</h1>
        <h5>Heading</h5>
        <Button text="Appear" onClicked={() => setWindowVisibility(true)} />
        <Button text="Dissapear" onClicked={() => setWindowVisibility(false)} />
        <InsetBox>
          <input />
        </InsetBox>

        <hr></hr>
        <p>
          Here is a <a href="https://google.com">link example</a>
        </p>
      </Window>
    </div>
  );
}

export default App;
