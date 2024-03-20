import "./Dropdown.css";
import "./DropdownList.js";

import DropdownList from "./DropdownList.js";

import pet_search_1 from "../src/assets/Pet_1_search.png";
import pet_search_2 from "../src/assets/Pet_2_search.png";

export default function Dropdown({ isOpenPet, isOpenBreed, componentRef }) {
  const petsList = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="dropdown">
      <section className="dropdownArea">
        <div
          className={`petDropdown ${isOpenPet ? "" : "showPet"}`}
          ref={componentRef}
        >
          <div className="petInnerContainer">
            <input
              className="searchInput"
              type="search"
              placeholder="Search..."
            />
            <div className="searchableList">
              {petsList.map((pet, index) => (
                <DropdownList
                  key={index}
                  pet_search={pet % 2 === 0 ? pet_search_1 : pet_search_2}
                  title={pet % 2 === 0 ? "Cat" : "Chinchilla"}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className={`breedDropdown ${isOpenBreed ? "" : "showBreed"}`}
          ref={componentRef}
        >
          <div className="petInnerContainer">
            <input
              className="searchInput"
              type="search"
              placeholder="Search..."
            />
            <div className="searchableList">
              {petsList.map((pet, index) => (
                <DropdownList
                  key={index}
                  pet_search={pet % 2 === 0 ? pet_search_1 : pet_search_2}
                  title={pet % 2 === 0 ? "Cat" : "Chinchilla"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
