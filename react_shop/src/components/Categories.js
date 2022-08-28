import { plantList } from "../data/plantList";
import "../styles/Categories.css";

function Categories({ setActiveCategory, activeCategory }) {
  // Recupération des catégories uniques du tableau d'objet
  const categories = [...new Set(plantList.map((plant) => plant.category))];

  return (
    <div className="lmj-categories">
      <p>Catégories :</p>
      <select
        name="categories"
        className="lmj-categories-select"
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
      >
        <option value="1">Choisissez une catégorie</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
