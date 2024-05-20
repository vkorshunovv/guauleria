import { useState } from "react";
import DropdownPetList from "./DropdownPetList.js";
import DropdownBreedList from "./DropdownBreedList.js";
import "./Dropdown.css";
import pet_search_1 from "../src/assets/Pet_1_search.png";
import pet_search_2 from "../src/assets/Pet_2_search.png";


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
}) {
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

  const [inputPetText, setInputPetText] = useState("");
  const [filteredPets, setFilteredPets] = useState(petsNameList);
  const [inputBreedText, setInputBreedText] = useState("");
  const [filteredBreed, setFilteredBreed] = useState(dogsBreedList);

  const filteredPetText = (e) => {
    const searchText = e.target.value.toLowerCase();
    setInputPetText(searchText);
    setFilteredPets(
      petsNameList.filter((pet) => pet.toLowerCase().includes(searchText))
    );
  };

  const filteredBreedText = (e) => {
    const searchText = e.target.value.toLowerCase();
    setInputBreedText(searchText);
    setFilteredBreed(
      dogsBreedList.filter((breed) => breed.toLowerCase().includes(searchText))
    );
  };

  return (
    <div className="dropdown">
      <section className="dropdownArea">
        <div
          className={`petDropdown ${isOpenPet ? "" : "showPet"} ${
            filteredPets.length ? "" : "reducedDropdown"
          }`}
          ref={petComponentRef}
        >
          <div className="petInnerContainer">
            <input
              className={`${filteredPets.length ? "" : "noMatch"} searchInput`}
              ref={inputRef}
              value={inputPetText}
              onInput={filteredPetText}
              type="search"
              placeholder="Search..."
            />
            <div
              className={`${
                filteredPets.length ? "" : "noMatchList"
              } searchableList`}
            >
              {filteredPets.length ? (
                filteredPets.map((pet, index) => (
                  <DropdownPetList
                    key={index}
                    pet_search={pet_search_1}
                    petName={pet}
                    setPetTitle={setPetTitle}
                    setOpenPet={setOpenPet}
                    setOpenBreed={setOpenBreed}
                    setInputPetText={setInputPetText}
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
          className={`breedDropdown ${isOpenBreed ? "" : "showBreed"} ${
            filteredBreed.length ? "" : "reducedDropdown"
          }`}
          ref={breedComponentRef}
        >
          <div className="petInnerContainer">
            <input
              className={` ${
                filteredBreed.length ? "" : "noMatch"
              } searchInput`}
              value={inputBreedText}
              onInput={filteredBreedText}
              type="search"
              placeholder="Search..."
            />
            <div
              className={`${
                filteredBreed.length ? "" : "noMatchList"
              } searchableList`}
            >
              {filteredBreed.length ? (
                filteredBreed.map((breed, index) => (
                  <DropdownBreedList
                    key={index}
                    breed_search={pet_search_2}
                    breedName={breed}
                    setBreedTitle={setBreedTitle}
                    setOpenBreed={setOpenBreed}
                    setInputBreedText={setInputBreedText}
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
      </section>
    </div>
  );
}
