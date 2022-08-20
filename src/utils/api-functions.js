import { SEARCHAPI } from "./constants";

export const searchMovies = (searchTerm) => {
  return fetch(`${SEARCHAPI}${searchTerm}`)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((err) => console.log(err));
};
