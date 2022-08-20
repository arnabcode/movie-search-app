import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContainerComponent from "../components/Container";
import SearchComponent from "../components/SearchComponent";
import ListComponent from "../components/ListComponent";
import DetailComponent from "../components/DetailComponent";
import Loader from "../components/Loader";

import { searchMovies } from "../utils/api-functions";
export default function MainPage() {
  const [keyword, setkeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchMoviesLoading, setSearchMoviesLoading] = useState(false);

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
  return (
    <ContainerComponent>
      <Header>
        <SearchComponent value={keyword} setValue={setkeyword} />
      </Header>
      <MoviesContainer>
        <ListComponent movies={movies} loading={searchMoviesLoading} />
        <DetailComponent />
      </MoviesContainer>
    </ContainerComponent>
  );
}

const Header = styled.div`
  grid-column: col / span 12;
  border: 1px solid black;
  display: grid;
  place-items: center;
  height: 15vh;
`;

const MoviesContainer = styled.div`
  grid-column: col / span 12;
  background-color: #f5e5f5;
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  height: 85vh;
`;
