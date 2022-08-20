import React from "react";
import styled from "styled-components";
export default function DetailComponent() {
  return <Detail>DetailComponent</Detail>;
}

const Detail = styled.div`
  grid-column: col 4 / span 9;
  height: 100%;
  background-color: #f3d5f5;
`;
