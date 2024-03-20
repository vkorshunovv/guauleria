import { useRef, useEffect, useState } from "react";

import "./App.css";
import Dropdown from "./Dropdown";
import Header from "./Header.js";
import Hero from "./Hero.js";

function App() {
  const [isOpenPet, setOpenPet] = useState(false);
  const revealPet = () => {
    setOpenPet(!isOpenPet);
    setOpenBreed(false);
  };
  const [isOpenBreed, setOpenBreed] = useState(false);
  const revealBreed = () => {
    setOpenBreed(!isOpenBreed);
    setOpenPet(false);
  };

  const componentRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target) &&
        !event.target.className.includes("searchPet") &&
        !event.target.className.includes("searchBreed")
      ) {
        setOpenPet(false);
        setOpenBreed(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero
        isOpenPet={isOpenPet}
        isOpenBreed={isOpenBreed}
        revealPet={revealPet}
        revealBreed={revealBreed}
      />
      <Dropdown
        isOpenPet={isOpenPet}
        isOpenBreed={isOpenBreed}
        componentRef={componentRef}
      />
    </div>
  );
}

export default App;
