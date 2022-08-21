import React from "react";
import styled from "styled-components";
export default function SearchComponent({ value, setValue }) {
  return (
    <StyledForm id="form">
      <Input
        type="text"
        id="search"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <StyledButton type="submit" form="form">
        Search
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  grid-column: col 1 / span 12;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Input = styled.input`
  margin: 1rem;
  margin-left: 5rem;
  background-color: transparent;
  border: 2px solid blue;
  border-radius: 5px;
  color: white;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  width: 50%;
  height: 3rem;
  &:focus {
    outline: none;
    border: 2px solid white;
    color: white;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    padding: 0.5rem 1rem;
    height: 2rem;
    margin-top: 1rem;
  }
`;

const StyledButton = styled.button`
  width: fit-content;
  padding: 0.7rem 1.5rem;

  background-color: blue;
  border-radius: 5px;
  color: white;
  border-color: blue;

  @media (max-width: 768px) {
    visibility: hidden;
    width: 0%;
    padding: 0;
  }
`;
