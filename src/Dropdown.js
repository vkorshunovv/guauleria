import "./Dropdown.css";
import "./DropdownList.js";

import DropdownList from "./DropdownList.js";

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

  const dogsBreed = [
    "German Shepherd",
    "Bulldog",
    "Labrador Retriever",
    "Husky",
    "Beagle",
    "Poodle",
    "Chihuahua",
  ];
  return (
    <div className="dropdown">
      <section className="dropdownArea">
        <div
          className={`petDropdown ${isOpenPet ? "" : "showPet"}`}
          ref={petComponentRef}
        >
          <div className="petInnerContainer">
            <input
              className="searchInput"
              type="search"
              placeholder="Search..."
            />
            <div className="searchableList">
              {petsCountList.map((pet, index) => (
                <DropdownList
                  key={index}
                  pet_search={pet % 2 === 0 ? pet_search_1 : pet_search_2}
                  petName={petsNameList[index]}
                  setPetTitle={setPetTitle}
                  setOpenPet={setOpenPet}
                  setOpenBreed={setOpenBreed}
                />
              ))}
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
                <DropdownList
                  key={index}
                  pet_search={breed % 2 === 0 ? pet_search_1 : pet_search_2}
                  petName={dogsBreed[index]}
                  setPetTitle={setBreedTitle}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
