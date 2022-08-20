import React from "react";
import styled from "styled-components";
function getColorByRate(vote) {
  if (vote >= 8) {
    return "rgb(39, 189, 39)";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "rgb(189, 42, 42);";
  }
}

export default function DescriptionContainer({ data }) {
  return (
    <Column>
      <MovieTitle>{data.title} </MovieTitle>
      <TagLine>{data.tagline}</TagLine>
      <GenreContainer>
        {data.genres.map((genre) => (
          <Genre key={genre.id}>{genre.name}</Genre>
        ))}
      </GenreContainer>

      <RatingContainer rating={data.vote_average}>
        <span>{data.vote_average}</span>/10
      </RatingContainer>
    </Column>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 1rem;
`;

const Genre = styled.div`
  border-radius: 55px;
  border-color: blue;
  border-style: solid;
  border-width: 2px;
  padding: 0.5rem;
  color: white;
  font-size: 0.7rem;
  margin: 0.2rem;
  background-color: blue;
`;

const TagLine = styled.div`
  font-size: 0.9rem;
  padding: 0.3rem 1rem;
`;
const GenreContainer = styled.div`
  display: flex;
  padding: 1rem;
`;

const CreatorsContainer = styled.div``;

const StarsContainer = styled.div``;
const RatingContainer = styled.div`
  background-color: ${(props) => getColorByRate(props.rating)};
  padding: 0.6rem;
  border-radius: 3px;
  width: fit-content;
  margin: 1rem;

  span {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.5rem;
  }
`;

const MovieTitle = styled.div`
  font-size: 1.7rem;
  padding: 1rem 1rem 0.2rem 1rem;

  // border: 1px solid black;
`;
