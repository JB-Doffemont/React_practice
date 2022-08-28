import { plantList } from "../data/plantList";
import "../styles/shoppingList.css";
import PlantItem from "./PlantItem";
import { useState } from "react";
import Categories from "./Categories";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");

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
      <Categories
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, light, water, price, category }) =>
          activeCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
