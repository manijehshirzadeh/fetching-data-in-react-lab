// import StarshipSearch from "./StarshipSearch";
import StarshipList from "./StarshipList";
import { getAllStartships } from "../services/starshipService";

import { useState, useEffect } from "react";

const App = () => {
  const [starships, setStarships] = useState([]);

  const fetchData = async () => {
    const data = await getAllStartships();

    setStarships(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>{starships.length !== 0 && <StarshipList starships={starships} />}</>
  );
};

export default App;
