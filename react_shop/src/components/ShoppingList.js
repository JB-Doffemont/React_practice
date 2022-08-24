import { plantList } from "../data/plantList";
import "../styles/shoppingList.css";
import Soldes from "./Soldes";

function ShoppingList() {
  // Recupération des catégories uniques du tableau d'objet
  const categories = [...new Set(plantList.map((plant) => plant.category))];

  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <div key={index}>
            <li>{category}</li>
          </div>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        <Soldes />
      </ul>
    </div>
  );
}

export default ShoppingList;
