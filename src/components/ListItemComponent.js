import React from "react";
import styled from "styled-components";
import { IMGPATH } from "../utils/constants";

export default function ListItemComponent({ movie, setMovie }) {
  return (
    <Movie
      image={IMGPATH + movie.poster_path}
      onClick={() => setMovie(movie.id)}
    >
      {/* <img src={IMGPATH + movie.poster_path} alt={movie.title} /> */}
      <MovieInfo>
        <Title>{movie.title}</Title>
        <Rating rate={movie.vote_average}>{movie.vote_average}</Rating>
        <ReleaseDate>
          <span>{movie.release_date}</span>
        </ReleaseDate>
        <OverView>{movie.overview}</OverView>
      </MovieInfo>
    </Movie>
  );
}

function getColorByRate(vote) {
  if (vote >= 8) {
    return "rgb(39, 189, 39)";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "rgb(189, 42, 42);";
  }
}

const Movie = styled.li`
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  margin: 0.5rem auto;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 10rem;

  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    margin: 0.5rem 1rem;
    width: 40%;
    float: left;
  }
`;

const OverView = styled.span`
  font-size: 0.8rem;
  height: 0rem;
  text-align: right;
  margin: 0.3rem 0;
  text-align: right;
  overflow: hidden;
  width: 100%;
  height: 0%;
`;

const MovieInfo = styled.div`
  color: #eee;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30%;
  transition: width 0.3s ease-in;
  background: rgba(0, 0, 0, 0.6);

  ${OverView} {
    transition: height 0.5s ease-in;
    transition: opacity 0.8s ease-in;
    opacity: 0;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.7);
    width: 95%;
    ${OverView} {
      height: 50%;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 20rem;
  }
`;

const Rating = styled.span`
  background-color: ${(props) => getColorByRate(props.rate)};
  color: white;
  font-size: 0.8rem;
  padding: 0.1rem 0.5rem;
  border-radius: 5px;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReleaseDate = styled.div`
  font-size: 0.7rem;
  span {
    font-size: 0.9rem;
    text-align: right;
  }
`;
