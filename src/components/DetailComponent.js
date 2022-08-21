import React from "react";
import styled from "styled-components";
import Loader from "./Loader";
import { IMGPATH } from "../utils/constants";
import DescriptionContainer from "./DescriptionContainer";
function getColorByRate(vote) {
  if (vote >= 8) {
    return "rgb(39, 189, 39)";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "rgb(189, 42, 42);";
  }
}

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
        <DataContainer data={data} />
      )}
    </Detail>
  );
}

const DataContainer = ({ data }) => {
  return (
    <>
      <BackgroundImage image={IMGPATH + data.poster_path} />
      <Container>
        <Row>
          <PosterContainer image={IMGPATH + data.backdrop_path} />

          <DescriptionContainer data={data} />
        </Row>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  filter: blur(18px);
  width: 100%;
  height: 100%;
`;

const PosterContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex: 1;
  margin: 0.5rem;
  height: 20rem;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const CreatorsContainer = styled.div``;

const StarsContainer = styled.div``;

const SearchPrompt = styled.div`
  font-size: 3rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 3rem;
`;

const Detail = styled.div`
  grid-column: col 4 / span 9;
  height: 80vh;

  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  margin: 0.5rem auto;

  width: 90%;

  @media (max-width: 768px) {
    grid-column: col 1 / span 12;
  }
`;
