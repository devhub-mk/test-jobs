import React from "react";
import styled from "styled-components";

const Secondary = ({ text, disable }) => {
  return (
    <Button type="button" disabled={disable}>
      {text}
    </Button>
  );
};
const Button = styled.button`
  display: block;
  background-color: #568564;
  width: max-content;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0.8rem 2.5rem;
  border-radius: 2px;
  color: white;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
export default Secondary;
