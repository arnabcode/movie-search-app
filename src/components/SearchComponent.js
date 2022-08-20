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
    </StyledForm>
  );
}

const StyledForm = styled.div`
  // border: 1px solid black;
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

  &:focus {
    outline: none;
    border: 2px solid blue;
    color: blue;
  }
`;
