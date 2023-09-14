import React from 'react';
import {styled} from 'styled-components';
const Primary = ({text, disable=false}) => {
  console.log(disable)
  return (
    <Button type="button" disabled={disable}>
        {text}
    </Button>
  )
}

const Button = styled.button`
display: block;
background-color: #BF4F74;
width: max-content;
font-size: 20px;
font-weight: 500;
cursor: pointer;
box-sizing: border-box;
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
export default Primary;
