import React from 'react';
import styled from 'styled-components';
import {Dark, Light, Primary, Secondary, Success, Warning} from './react-buttons';
const Results = () => {
  return (
    <div>
      <h1>Result Here</h1>
      <Buttons>
        <Primary text={"Primary"}/>
        <Secondary text={"Secondary"}/>
        <Light text={"Light"}/>
        <Success text={"Success"}/>
        <Warning text={"Warning"}/>
        <Dark text={"Dark"}/>
      </Buttons>
    </div>
  )
}
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
export default Results
