import "./DropdownList.css";

export default function DropdownList({ pet_search, index, title }) {
  return (
    <ul className="searchableItem">
      <li>{title}</li>
      <div>
        <img src={pet_search} alt={`Pet_${index}`} />
      </div>
    </ul>
  );
}
