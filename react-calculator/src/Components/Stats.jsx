import React from 'react';
import {styled} from 'styled-components';

const Stats = ({title, amount}) => {
  return (
    <Container>
        <div>{title}</div>
        <div>₹{amount}</div>
    </Container>
  )
};
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 500;
    font-size: 19px;
    color: #7c7e8c;
`;

export default Stats
