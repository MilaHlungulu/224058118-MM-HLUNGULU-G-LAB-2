import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import ravenImg from "./assets/RAVEN.jpeg";
import beastBoyImg from "./assets/BEASTIE.jpeg";

function App() {
  return (
    <div className="App">
      <h1>Teen Titans</h1>
      <div className="profile-cards-container">
        <ProfileCard
          name="Raven"
          title="Empath & Sorceress"
          image={ravenImg}
          bio="Mysterious and powerful, Raven channels dark magic to protect her team."
        />
        <ProfileCard
          name="Beast Boy"
          title="Shape-Shifter"
          image={beastBoyImg}
          bio="Fun-loving and fearless, Beast Boy can transform into any animal."
        />
      </div>
    </div>
  );
}

export default App;

