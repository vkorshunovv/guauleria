import DropdownPetList from "./DropdownPetList.js";
import DropdownBreedList from "./DropdownBreedList.js";
import "./Dropdown.css";
import pet_search_1 from "../src/assets/Pet_1_search.png";
import pet_search_2 from "../src/assets/Pet_2_search.png";
import { useState, useRef } from "react";

export default function Dropdown({
  isOpenPet,
  isOpenBreed,
  setOpenPet,
  setOpenBreed,
  petComponentRef,
  breedComponentRef,
  setPetTitle,
  setBreedTitle,
  inputRef,
  handleInputFocus,
}) {
  const petsCountList = [1, 2, 3, 4, 5, 6, 7];
  const petsNameList = [
    "Dog",
    "Cat",
    "Rabbit",
    "Snake",
    "Chinchilla",
    "Parrot",
    "Lizard",
  ];

  const dogsBreedList = [
    "German Shepherd",
    "Bulldog",
    "Labrador Retriever",
    "Husky",
    "Beagle",
    "Poodle",
    "Chihuahua",
  ];

  const [inputText, setInputText] = useState("");
  const [filteredPets, setFilteredPets] = useState(petsNameList);

  const filteredText = (e) => {
    const searchText = e.target.value.toLowerCase();
    setInputText(searchText);
    setFilteredPets(
      petsNameList.filter((pet) => pet.toLowerCase().includes(searchText))
    );
  };

  return (
    <div className="dropdown">
      <section className="dropdownArea">
        <div
          className={`petDropdown ${isOpenPet ? "" : "showPet"} ${filteredPets.length ? "" : "reducedPetDropdown"}`}
          ref={petComponentRef}
        >
          <div className="petInnerContainer">
            <input
              className={` ${filteredPets.length ? "" : "noMatch"} searchInput`}
              ref={inputRef}
              value={inputText}
              onInput={filteredText}
              type="search"
              placeholder="Search..."
            />
            <div className={`${filteredPets.length ? "" : "noMatchList"} searchableList`}>
              {filteredPets.length ? (
                filteredPets.map((pet, index) => (
                  <DropdownPetList
                    key={index}
                    pet_search={pet_search_1}
                    petName={pet}
                    setPetTitle={setPetTitle}
                    setOpenPet={setOpenPet}
                    setOpenBreed={setOpenBreed}
                    filteredPets={filteredPets}
                    inputText={inputText}
                  />
                ))
              ) : (
                <div className="noMatchSection">
                  <p>Sorry, we couldn't find anything.</p>
                  <p>Try another phrase.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`breedDropdown ${isOpenBreed ? "" : "showBreed"}`}
          ref={breedComponentRef}
        >
          <div className="petInnerContainer">
            <input
              className="searchInput"
              type="search"
              placeholder="Search..."
            />
            <div className="searchableList">
              {petsCountList.map((breed, index) => (
                <DropdownBreedList
                  key={index}
                  // breed_search={breed % 2 === 0 ? pet_search_1 : pet_search_2}
                  breedName={dogsBreedList[index]}
                  setBreedTitle={setBreedTitle}
                  setOpenBreed={setOpenBreed}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
