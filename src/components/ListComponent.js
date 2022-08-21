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
  height: 80vh;
  padding: 0 20px;
  overflow-y: scroll;
  position: relative;

  @media (max-width: 768px) {
    grid-column: col 1 / span 12;
    height: 60vh;
    border: 3px dashed #ccc;
    padding: 0.5rem;
    margin: 1rem;
    border-radius: 13px;
  }
`;
