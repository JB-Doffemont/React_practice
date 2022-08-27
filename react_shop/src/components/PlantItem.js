import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem(props) {
  // function handleClick(plantName) {
  //   alert(`✨Vous avez cliqué sur : ${plantName}, très bon choix !`);
  // }

  // function handleClick(e) {
  //   console.log("✨ Ceci est mon event :", e);
  // }
  const { id, name, cover, light, water, isSpecialOffer } = props;
  return (
    <div key={id}>
      <div>
        <li className="lmj-plant-item">
          <img
            src={cover}
            alt={`${name} cover`}
            className="lmj-plant-item-cover"
          />
          {name}
          <div>
            {isSpecialOffer && <div className="lmj-sales">Soldes !</div>}
            <CareScale careType={"light"} scaleValue={light} />
            <CareScale careType={"water"} scaleValue={water} />
          </div>
        </li>
      </div>
    </div>
  );
}

export default PlantItem;
