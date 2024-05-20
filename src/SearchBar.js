import "./SearchBar.css";
import dogFace from "./assets/Dog Face.png";
import dog from "./assets/Dog.png";

export default function SearchBar({
  revealPet,
  revealBreed,
  petTitle,
  breedTitle,
  handleInputFocus,
}) {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 75,
      behavior: "smooth",
    });
  };

  const handleClickPet = () => {
    revealPet();
    scrollToBottom();
    handleInputFocus();
  };
  const handleClickBreed = () => {
    revealBreed();
    scrollToBottom();
  };

  return (
    <form className="searchBar">
      <section className="searchSections">
        <div className="searchPet" onClick={handleClickPet}>
          <div className="searchContainer">
            <div className="upperSearchText">
              <p>Pet</p>
              <img src={dogFace} alt="Dog Face" />
            </div>
            <p>{petTitle}</p>
          </div>
        </div>
        <div className="searchBreed" onClick={handleClickBreed}>
          <div className="searchContainer">
            <div className="upperSearchText">
              <p>Breed</p>
              <img src={dog} alt="Dog Breed" />
            </div>
            <p>{breedTitle}</p>
          </div>
        </div>
      </section>
      <section className="searchButton">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <p>Find now</p>
        </a>
      </section>
    </form>
  );
}
