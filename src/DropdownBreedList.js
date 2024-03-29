import "./DropdownBreedList.css";
import "./DropdownPetList.css";

export default function DropdownBreedList({
  breed_search,
  setOpenBreed,
  breedName,
  setBreedTitle,
  setInputBreedText
}) {
  const handleBreedTitle = () => {
    setBreedTitle(breedName);
    setOpenBreed(false);
    setInputBreedText("")
  };
  return (
    <ul className="searchableItem" onClick={handleBreedTitle}>
      <li>{breedName}</li>
      <div className="breedImg">
        <img src={breed_search} alt={`Pet_${breedName}`} />
      </div>
    </ul>
  );
}
