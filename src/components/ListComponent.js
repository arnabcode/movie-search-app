import React from "react";
import styled from "styled-components";
import ListItemComponent from "./ListItemComponent";
import Loader from "./Loader";
export default function ListComponent({ movies = [], loading, setMovie }) {
  return (
    <StyledList>
      {loading ? (
        <Loader />
      ) : (
        movies.map((movie) => (
          <ListItemComponent key={movie.id} movie={movie} setMovie={setMovie} />
        ))
      )}
    </StyledList>
  );
}

const StyledList = styled.div`
  grid-column: col / span 3;
  height: 100%;

  position: relative;
`;
