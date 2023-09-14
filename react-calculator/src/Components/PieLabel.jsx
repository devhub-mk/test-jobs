import React from "react";
import { styled } from "styled-components";

const PieLabel = ({ title, color }) => {
  return (
    <Label>
      <div className='pie-color' style={{backgroundColor: color}}></div>
      <div>{title}</div>
    </Label>
  );
};
const Label = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 14px;
    align-items: center;
    color: #7c7e8c;
    .pie-color{
        display: inline-block;
        height: 12px;
        width: 20px;
        border-radius: 5px;
        margin-top: 2px;
    }
`;
export default PieLabel;
