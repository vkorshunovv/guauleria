import { useState } from "react";

import "./App.css";
import Dropdown from "./Dropdown";
import Header from "./Header.js";
import Hero from "./Hero.js";

function App() {
  const [isOpenPet, setOpenPet] = useState(false);
  const revealPet = () => {
    setOpenPet(!isOpenPet);
    setOpenBreed(false)
  };
  const [isOpenBreed, setOpenBreed] = useState(false);
  const revealBreed = () => {
    setOpenBreed(!isOpenBreed);
    setOpenPet(false)
  };
  return (
    <div className="App">
      <Header />
      <Hero isOpenPet={isOpenPet} isOpenBreed={isOpenBreed} revealPet={revealPet} revealBreed={revealBreed} />
      <Dropdown isOpenPet={isOpenPet} isOpenBreed={isOpenBreed} />
    </div>
  );
}

export default App;
