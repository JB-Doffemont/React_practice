import { plantList } from "../data/plantList";

function Soldes() {
  return plantList.map((plant) => (
    <div key={plant.id}>
      <div>
        <li className="lmj-plant-item">
          {plant.name}
          <div>
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes !</div>}
          </div>
        </li>
      </div>
    </div>
  ));
}

export default Soldes;
