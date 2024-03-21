import "./DropdownPetList.css";

export default function DropdownPetList({ pet_search, petName, setPetTitle, setOpenPet, setOpenBreed }) {

  const handlePetTitle = () => {
    setPetTitle(petName)
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
