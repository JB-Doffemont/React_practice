import { plantList } from "../data/plantList";
import CareScale from "./CareScale";

function Plants() {
  return plantList.map((plant) => (
    <div key={plant.id}>
      <div>
        <li className="lmj-plant-item">
          {plant.name}
          <div>
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes !</div>}
            <CareScale careType={"light"} scaleValue={plant.light} />
            <CareScale careType={"water"} scaleValue={plant.water} />
          </div>
        </li>
      </div>
    </div>
  ));
}

export default Plants;
