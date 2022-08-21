import { plantList } from "../data/plantList";

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
      <ul>
        {plantList.map((plant) => (
          <div key={plant.id}>
            <li>{plant.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
