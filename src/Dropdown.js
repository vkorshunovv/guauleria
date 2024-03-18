import "./Dropdown.css";
import "./DropdownList.js"

import DropdownList from "./DropdownList.js";

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
            <DropdownList />
          </div>
        </div>
        <div className="breedDropdown"></div>
      </section>
    </div>
  );
}
