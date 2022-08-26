import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale(props) {
  // destructuration qui permet de récupérer la valeur d'une propriété d'un objet;
  const { scaleValue, careType } = props;

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
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
