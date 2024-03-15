import "./SquareCard.css";

export default function SquareCard({ img }) {
  return (
    <div className="squareCardContainer">
      <img src={img} />
    </div>
  );
}
