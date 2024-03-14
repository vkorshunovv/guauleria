import "./SearchBar.css";

export default function SearchBar() {
  return (
    <form className="searchBar">
      <section className="searchSections">
        <div className="searchPet"></div>
        <div className="searchBreed"></div>
      </section>
      <section className="searchButton">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <p>Find now</p>
        </a>
      </section>
    </form>
  );
}
