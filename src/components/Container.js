import React from "react";
import styled from "styled-components";
export default function ContainerComponent({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  grid-column-gap: 20px;
  height: 100%;
  background: linear-gradient(
    112.1deg,
    rgb(32, 38, 57) 11.4%,
    rgb(63, 76, 119) 70.2%
  );
`;
