const StarshipCard = (props) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.starship.name}</h5>
        <h6>classNameName: {props.starship.starship_className}</h6>
        <h6>Manufacturer : {props.starship.manufacturer}</h6>
        <h6>Model: {props.starship.model}</h6>
      </div>
    </div>
  );
};

export default StarshipCard;
