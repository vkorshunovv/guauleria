import "./RoundCard.css";

export default function RoundCard({ img }) {
  return (
    <div className="roundCardContainer">
      <img src={img} alt="Round Product Card"/>
    </div>
  );
}
