import "./SearchBar.css";
import dogFace from "./assets/Dog Face.png";
import dog from "./assets/Dog.png";

export default function SearchBar() {
  return (
    <form className="searchBar">
      <section className="searchSections">
        <div className="searchPet">
          <div className="searchContainer">
            <div className="upperSearchText">
              <p>Pet</p>
              <img src={dogFace} />
            </div>
            <p>Dog</p>
          </div>
        </div>
        <div className="searchBreed">
          <div className="searchContainer">
            <div className="upperSearchText">
              <p>Breed</p>
              <img src={dog} />
            </div>
            <p>Golden Retriever</p>
          </div>
        </div>
      </section>
      <section className="searchButton">
        <a href="#" target="_blank" rel="noopener noreferrer" className="">
          <p>Find now</p>
        </a>
      </section>
    </form>
  );
}
