import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale(props) {
  // destructuration qui permet de récupérer la valeur d'une propriété d'un objet;
  const { scaleValue, careType } = props;

  function careValue(scaleValue, careType) {
    if (careType === "water") {
      if (scaleValue === 1) {
        alert(`Cette plante a besoin d'un peu d'eau.`);
      } else if (scaleValue === 2) {
        alert(`Cette plante a besoin de moyennement d'eau.`);
      } else if (scaleValue === 3) {
        alert(`Cette plante a besoin de beaucoup d'eau.`);
      }
    }
    if (careType === "light") {
      if (scaleValue === 1) {
        alert(`Cette plante a besoin d'un peu d'ensoleillement.`);
      } else if (scaleValue === 2) {
        alert(`Cette plante a besoin de moyennement d'ensoleillement.`);
      } else if (scaleValue === 3) {
        alert(`Cette plante a besoin de beaucoup d'ensoleillement.`);
      }
    }
  }

  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="icon-soleil"></img>
    ) : (
      <img src={Water} alt="icon-water"></img>
    );

  const range = [1, 2, 3];

  return (
    <div>
      {range.map((rangeElem) =>
        // permet d'afficher le nombre d'icons en comparant scaleValue et rangeElem
        scaleValue >= rangeElem ? (
          <span
            key={rangeElem.toString()}
            onClick={() => careValue(scaleValue, careType)}
          >
            {scaleType}
          </span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
