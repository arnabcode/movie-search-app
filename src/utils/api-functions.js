import { SEARCHAPI, MOVIEURL, APIKEY } from "./constants";

export const searchMovies = (searchTerm) => {
  return fetch(`${SEARCHAPI}${searchTerm}`)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((err) => console.log(err));
};

export const getMovieDetails = (movieId) => {
  return fetch(`${MOVIEURL}/${movieId}${APIKEY}`)
    .then((res) => res.json())

    .catch((err) => console.log(err));
};
