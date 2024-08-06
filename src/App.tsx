import  { FC } from "react";
import "./App.css";
import MusicPlayer from "./Component/MusicPlayer";

const App: FC = () => {
  return (
    <>
      <div className="App">
        <main className="App-main">
          <MusicPlayer />
          <p className="devP">©2024: <span className="zeeg">Believe {"(Album)"} - Deveryboy</span></p>
        </main>
      </div>
    </>
  );
};

export default App;
