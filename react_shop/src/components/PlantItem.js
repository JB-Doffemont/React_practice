import CareScale from "./CareScale";

function PlantItem(props) {
  const { id, name, cover, light, water, isSpecialOffer } = props;
  return (
    <div key={id}>
      <div>
        <li className="lmj-plant-item">
          {name}
          {cover}
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
