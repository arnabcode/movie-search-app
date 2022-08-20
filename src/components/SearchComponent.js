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
  width: 60%;
`;

const Input = styled.input`
  margin: 1rem;
  margin-left: 5rem;
  background-color: transparent;
  border: 2px solid #e9e9ec;
  border-radius: 5px;
  color: dark-grey;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  width: 40%;
  height: 3rem;
  &:focus {
    outline: none;
    border: 2px solid blue;
    color: blue;
  }
`;

const StyledButton = styled.button`
  width: 10%;
  height: 2rem;
  background-color: blue;
  border-radius: 5px;
  color: white;
  border-color: blue;
`;
