import { plantList } from "../data/plantList";
import "../styles/shoppingList.css";
import PlantItem from "./PlantItem";

function ShoppingList() {
  // Recupération des catégories uniques du tableau d'objet
  const categories = [...new Set(plantList.map((plant) => plant.category))];

  return (
    <div className="lmj-shopping-list">
      <ul>
        {categories.map((category, index) => (
          <div key={index}>
            <li>{category}</li>
          </div>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant, index) => (
          <div key={index}>
            <PlantItem
              id={plant.id}
              name={plant.name}
              cover={plant.cover}
              light={plant.light}
              water={plant.water}
              isSprecialOffer={plant.isSpecialOffer}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
