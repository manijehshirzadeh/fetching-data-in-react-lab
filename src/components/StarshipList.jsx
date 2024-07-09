import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
  return (
    <>
      <h2>Starships</h2>
      <h5>Number of results: {props.numberOfResults}</h5>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {props.starships.map((starship) => {
          return <StarshipCard key={starship.name} starship={starship} />;
        })}
      </div>
    </>
  );
};

export default StarshipList;
