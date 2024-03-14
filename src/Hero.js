import "./Hero.css";
import SearchBar from "./SearchBar";
import SquareCard from "./SquareCard";
import RoundCard from "./RoundCard";
import pet_1 from "./assets/Rectangle_1.png";
import pet_2 from "./assets/Round_1.png";
import pet_3 from "./assets/Rectangle_2.png";
import pet_4 from "./assets/Round_2.png";
import pet_5 from "./assets/Rectangle_3.png";
import pet_6 from "./assets/Round_3.png";

export default function Hero() {
  const cards = [0, 1, 2, 3, 4, 5];
  const imgPets = [pet_1, pet_2, pet_3, pet_4, pet_5, pet_6];
  return (
    <div className="hero">
      <div className="mainHero">
        <div className="heroContainer">
          <section className="cardsContainer">
            {cards.map((card) =>
              card % 2 === 0 ? (
                <SquareCard key={card} img={imgPets[card]}/>
              ) : (
                <RoundCard key={card} img={imgPets[card]}/>
              )
            )}
          </section>
          <section></section>
        </div>
      </div>
      <SearchBar />
    </div>
  );
}
