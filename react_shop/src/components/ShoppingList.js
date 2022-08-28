import { plantList } from "../data/plantList";
import "../styles/shoppingList.css";
import PlantItem from "./PlantItem";

function ShoppingList({ cart, updateCart }) {
  // Recupération des catégories uniques du tableau d'objet
  const categories = [...new Set(plantList.map((plant) => plant.category))];

  function addToCart(name, price) {
    // On vérifie si la plante est déjà présente dans notre liste d'objet
    const currentPlantAdded = cart.find((plant) => plant.name === name);

    // Si elle existe
    if (currentPlantAdded) {
      // On crée un nouveau tableau sans elle
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );

      // On ajoute le tableau sans elle et on ajoute dans ce tableau un objet avec la nouvelle quantité
      updateCart([
        ...cartFilteredCurrentPlant,
        {
          name,
          price,
          amount: currentPlantAdded.amount + 1,
        },
      ]);

      // Sinon on récupère le cart déjà existant et on ajoute un objet qu'on initialise avec un montant de 1
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

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
        {plantList.map(
          ({ id, cover, name, light, water, isSpecialOffer, price, index }) => (
            <div key={id}>
              <PlantItem
                id={id}
                name={name}
                cover={cover}
                light={light}
                water={water}
                isSprecialOffer={isSpecialOffer}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          )
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
