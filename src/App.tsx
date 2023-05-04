import { useState } from "react";
import "./App.css";
import Window from "./components/Window";
import InsetBox from "./components/InsetBox";

function App() {
  return (
    <div className="steam-background">
      <Window showTaskbar={true} title="Steam">
        <h2>Title</h2>
        <h5>June 20, 2021</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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

      <Window showTaskbar={false} title="Steam">
        <h1>Heading</h1>
        <h5>Heading</h5>

        <InsetBox>
          <p>
            This page is here to demonstrate this early green Steam UI style.
            This is a window element. Its title is set through the name
            attribute.
          </p>
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
