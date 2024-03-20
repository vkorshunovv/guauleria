import "./SearchBar.css";
import dogFace from "./assets/Dog Face.png";
import dog from "./assets/Dog.png";

export default function SearchBar({ revealPet, revealBreed }) {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 135,
      behavior: "smooth",
    });
  };

  const handleClickPet = () => {
    revealPet();
    scrollToBottom();
  };
  const handleClickBreed = () => {
    revealBreed();
    scrollToBottom();
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="searchBar">
      <section className="searchSections">
        <div className="searchPet" onClick={handleClickPet} id="searchPet">
          <div className="searchContainer">
            <div className="upperSearchText">
              <p>Pet</p>
              <img src={dogFace} alt="Dog Face" />
            </div>
            <p>Chinchilla</p>
          </div>
        </div>
        <div className="searchBreed" onClick={handleClickBreed}>
          <div className="searchContainer">
            <div className="upperSearchText">
              <p>Breed</p>
              <img src={dog} alt="Dog Breed" />
            </div>
            <p>Ebony</p>
          </div>
        </div>
      </section>
      <section className="searchButton" onClick={handleSubmit}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <p>Find now</p>
        </a>
      </section>
    </form>
  );
}
