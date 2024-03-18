import "./DropdownList.css"

import pet_search_1 from "../src/assets/Pet_1_search.png";
import pet_search_2 from "../src/assets/Pet_2_search.png"
import pet_search_3 from "../src/assets/Pet_3_search.png"

export default function DropdownList() {
    return (
        <div className="searchableList">
              <div className="searchableItem">
                <p>Cat</p>
                <div>
                  <img src={pet_search_2} />
                </div>
              </div>
            </div>
    )
}