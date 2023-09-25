import React from "react";
import styled from "styled-components";

const Pagination = ({currentPage, previous, next, totalPages}) => {
  return (
    <Container>
      <button onClick={previous} className={`${currentPage===totalPages?"button":"button disabled"}`}>Previous</button>
      <button onClick={next} className={`${currentPage===1?"button":"button disabled"}`}>Next</button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .button{
    padding: 10px 20px;
    background-color: none;
    border-radius: 5px;
    border: 2px solid #1279ff;
    cursor: pointer;
    font-size: 1rem;
  }
  .disabled{
    pointer-events: none;
    opacity: 0.5;
  }
`;
export default Pagination;
