const BASE_URL = "https://swapi.dev/api/";

const getAllStartships = async () => {
  try {
    const response = await fetch(BASE_URL + "/starships/");
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const searchStartships = async (searchTerm) => {
  try {
    const response = await fetch(BASE_URL + "/starships/?search=" + searchTerm);
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getAllStartships, searchStartships };
