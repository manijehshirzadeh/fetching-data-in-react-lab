import { useState } from "react";
import { searchStartships } from "../services/starshipService";

const StarshipSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = async () => {
    const data = await searchStartships(searchTerm);
    props.onSearch(data);
  };
  return (
    <form>
      <div className="mb-3">
        <h1>Star Wars API</h1>
        <h2>Search</h2>
        <div style={{ display: "flex" }}>
          <label className="form-label">search Team:</label>
          <input
            style={{ width: "20%" }}
            type="search"
            className="form-control"
            placeholder="Search Team"
            onChange={(event) => setSearchTerm(event.target.value)}
            value={searchTerm}
          />
          <button
            type="button"
            className="btn btn-dark"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default StarshipSearch;
