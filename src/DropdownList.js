import "./DropdownList.css";

export default function DropdownList({ pet_search, petName, setPetTitle, setBreedTitle, setOpenPet, setOpenBreed }) {

  const handlePetTitle = () => {
    setPetTitle(petName)
    // setBreedTitle(petName)
    setOpenPet(false)
    setOpenBreed(true)
  }
  return (
    <ul className="searchableItem" onClick={handlePetTitle}>
      <li >{petName}</li>
      <div>
        <img src={pet_search} alt={`Pet_${petName}`} />
      </div>
    </ul>
  );
}
