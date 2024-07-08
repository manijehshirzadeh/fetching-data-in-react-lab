import { useState } from "react";
import { searchStartships } from "../services/starshipService";

const StarshipSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = async () => {
    const data = await searchStartships(searchTerm);
  };
  return (
    <div className="mb-3">
      <h2>Search</h2>

      <label htmlFor="formGroupExampleInput" className="form-label">
        search Team:
      </label>
      <input
        type="search"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Search Team"
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default StarshipSearch;
