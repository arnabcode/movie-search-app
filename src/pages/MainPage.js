import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContainerComponent from "../components/Container";
import SearchComponent from "../components/SearchComponent";
import ListComponent from "../components/ListComponent";
import DetailComponent from "../components/DetailComponent";
import Loader from "../components/Loader";

import { searchMovies, getMovieDetails } from "../utils/api-functions";
export default function MainPage() {
  const [keyword, setkeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchMoviesLoading, setSearchMoviesLoading] = useState(false);
  const [movieLoading, setMovieLoading] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (keyword !== "") {
      setSearchMoviesLoading(true);
      setTimeout(() => {
        //call api function
        searchMovies(keyword)
          .then((data) => {
            setMovies(data);
            setSearchMoviesLoading(false);
          })
          .catch((err) => {
            console.error(err);
            setSearchMoviesLoading(false);
          });
      }, 3000);
    }
  }, [keyword]);

  useEffect(() => {
    if (movieId !== null) {
      setMovieLoading(true);
      getMovieDetails(movieId)
        .then((data) => {
          setMovieData(data);
          setMovieLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setMovieLoading(false);
        });
    }
  }, [movieId]);

  return (
    <ContainerComponent>
      <Header>
        <AppTitle>Movie Search app</AppTitle>
        <SearchComponent value={keyword} setValue={setkeyword} />
      </Header>
      <MoviesContainer>
        <ListComponent
          movies={movies}
          loading={searchMoviesLoading}
          setMovie={setMovieId}
        />
        <DetailComponent data={movieData} loading={movieLoading} />
      </MoviesContainer>
    </ContainerComponent>
  );
}

const Header = styled.div`
  grid-column: col / span 12;
  display: flex;
  height: 15vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
`;

const MoviesContainer = styled.div`
  grid-column: col / span 12;
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  height: 85vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
`;

const AppTitle = styled.div`
  width: 30%;
  font-size: 2.5rem;
  text-align: center;
  color: #0303fc;
  font-weight: bold;
  align-self: center;

  text-shadow: 0px 0px 5px #fff;

  @media (max-width: 1024px) {
    width: 50%;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
