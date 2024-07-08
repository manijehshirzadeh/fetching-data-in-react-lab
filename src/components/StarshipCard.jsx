const StarshipCard = (props) => {
  return (
    <div>
      <h5>{props.starship.name}</h5>
      <h5> Class: {props.starship.starship_class}</h5>
      <h5>Manufacturer : {props.starship.manufacturer}</h5>
      <h5>Model: {props.starship.model}</h5>
    </div>
  );
};

export default StarshipCard;
