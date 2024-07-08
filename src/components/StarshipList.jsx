import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
  console.log(props.starships);
  return (
    <>
      <h1>Star Wars API</h1>
      <h5>Number of results: {}</h5>
      {props.starships.map((starship) => {
        return <StarshipCard key={starship.name} starship={starship} />;
      })}
    </>
  );
};

export default StarshipList;
