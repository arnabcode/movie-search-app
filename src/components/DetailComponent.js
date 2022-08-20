import React from "react";
import styled from "styled-components";
import Loader from "./Loader";
import { IMGPATH } from "../utils/constants";
export default function DetailComponent({ data, loading }) {
  console.log(data);
  return (
    <Detail image={IMGPATH + data?.poster_path}>
      {!data ? (
        <SearchPrompt>
          Search and view details of your favourite movies
        </SearchPrompt>
      ) : loading ? (
        <Loader />
      ) : (
        <MovieTitle>{data.title} </MovieTitle>
      )}
    </Detail>
  );
}

const Detail = styled.div`
  grid-column: col 4 / span 9;
  height: 80vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  margin: 0.5rem auto;
  justify-content: center;
  align-content: center;
  width: 90%;

  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
`;

const SearchPrompt = styled.div`
  font-size: 3rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 3rem;
`;

const MovieTitle = styled.div`
  font-size: 2rem;
`;
