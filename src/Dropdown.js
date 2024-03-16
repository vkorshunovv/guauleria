import "./Dropdown.css";

export default function Dropdown() {
  return (
    <div className="dropdown">
      <section className="dropdownArea">
        <div className="petDropdown">
          <div className="petInnerContainer">
            <input
              className="searchInput"
              type="search"
              placeholder="Search..."
            />
            <div className="searchableList"></div>
          </div>
        </div>
        <div className="breedDropdown"></div>
      </section>
    </div>
  );
}
