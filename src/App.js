import { useRef, useEffect, useState } from "react";

import "./App.css";
import Dropdown from "./Dropdown.js";
import Header from "./Header.js";
import Hero from "./Hero.js";

function App() {
  const [petTitle, setPetTitle] = useState("Dog");
  const [breedTitle, setBreedTitle] = useState("German Shepherd");

  const inputRef = useRef(null);

  const handleInputFocus = () => {
    inputRef.current.focus();
    console.log('Focus click was triggered')
  };

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

  const petComponentRef = useRef(null);
  const breedComponentRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        petComponentRef.current &&
        breedComponentRef &&
        !petComponentRef.current.contains(event.target) &&
        !breedComponentRef.current.contains(event.target) &&
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
        petTitle={petTitle}
        breedTitle={breedTitle}
        inputRef={inputRef}
        handleInputFocus={handleInputFocus}
      />
      <Dropdown
        isOpenPet={isOpenPet}
        isOpenBreed={isOpenBreed}
        setOpenPet={setOpenPet}
        setOpenBreed={setOpenBreed}
        petComponentRef={petComponentRef}
        breedComponentRef={breedComponentRef}
        petTitle={petTitle}
        breedTitle={breedTitle}
        setPetTitle={setPetTitle}
        setBreedTitle={setBreedTitle}
        inputRef={inputRef}
        handleInputFocus={handleInputFocus}
      />
    </div>
  );
}

export default App;
