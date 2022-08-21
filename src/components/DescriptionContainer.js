import React from "react";
import styled from "styled-components";
import Star from "./Star";
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
      <Row>
        <MovieTitle>{data.title} </MovieTitle>
        {data.tagline && <TagLine>{data.tagline}</TagLine>}

        <ReleaseDate>
          Released on: <span>{data.release_date}</span>
        </ReleaseDate>

        <RatingContainer rating={data.vote_average}>
          <Star />
          <span>{data.vote_average}</span>
          /10
        </RatingContainer>

        <GenreContainer>
          {data.genres.map((genre) => (
            <Genre key={genre.id}>{genre.name}</Genre>
          ))}
        </GenreContainer>
        <LanguagesContainer>
          Languages:
          {data.spoken_languages.map((lan) => (
            <Language>{lan.english_name}</Language>
          ))}
        </LanguagesContainer>
      </Row>
      <OverViewContainer>
        <span>Overview</span>

        <div>{data.overview}</div>
      </OverViewContainer>
    </Column>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
  flex: 1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Genre = styled.div`
  border-radius: 55px;
  border-color: black;
  border-style: solid;
  border-width: 2px;
  padding: 0.5rem;
  color: white;
  font-size: 0.7rem;
  margin: 0.2rem;
  background-color: black;

  @media (max-width: 768px) {
    margin: 0rem;
    padding: 0.2rem;
    font-size: 0.7rem;
  }
`;

const TagLine = styled.div`
  font-size: 0.9rem;
  padding: 0.3rem 1rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const GenreContainer = styled.div`
  display: flex;
  padding: 0.1rem 1rem;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const OverViewContainer = styled.div`
  span {
    font-size: 1.2rem;
    text-decoration: underline;
    padding: 0.5rem;
  }
  margin: 0.8rem;
  font-size: 0.9rem;
  border: 1px dashed black;
  padding: 0.5rem;
  border-radius: 5px;
  height: 20rem;
  overflow: scroll;
  div {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    flex: 2;
    height: 15rem;
  }
`;

const LanguagesContainer = styled.div`
  padding: 0.2rem 1.5rem;
  display: flex;
  font-size: 0.7rem;
  align-items: center;
  @media (max-width: 768px) {
    visibility: hidden;
    padding: 0;
  }
`;

const Language = styled.div`
  font-size: 0.9rem;
  padding: 0 0.5rem;
`;
const RatingContainer = styled.div`
  background-color: ${(props) => getColorByRate(props.rating)};
  padding: 0.1rem 0.6rem;
  border-radius: 3px;
  width: fit-content;
  margin: 0.2rem 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  span {
    font-size: 1rem;
    font-weight: bold;
    padding: 0.3rem;
  }

  @media (max-width: 768px) {
    padding: 0.1rem 0.3rem;
    font-size: 0.7rem;
    span {
      font-size: 0.8rem;
      font-weight: bold;
      padding: 0.15rem;
    }
  }
`;

const ReleaseDate = styled.div`
  margin: 1.5rem 1rem 0.5rem 1rem;
  font-size: 0.8rem;
  width: fit-content;

  span {
    font-size: 0.9rem;
    border: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.5);
    padding: 0.3rem;
    border-radius: 3px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;

    span {
      font-size: 0.6rem;
      border: 1px;
      border-style: solid;
      border-color: rgba(0, 0, 0, 0.5);
      padding: 0.2rem;
      border-radius: 3px;
      color: rgba(0, 0, 0, 0.7);
      font-weight: bold;
    }
  }
`;

const MovieTitle = styled.div`
  font-size: 2.1rem;
  font-weight: bold;
  padding: 1rem 1rem 0.2rem 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }
  // border: 1px solid black;
`;
