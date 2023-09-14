import React from 'react';
import {styled} from 'styled-components';

const CalLabel = (props) => {
  return (
    <Container>
        <div className="label">{props.heading}</div>
        <div className="amount">
            {props.rupee && <div>₹</div>}
            <div className='value'>
                {props.value}
                {props.percentage && <span>%</span>}
            </div>

        </div>
    </Container>
  )
};
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .label{
        color: #44475b;
    }
    .amount{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 8px;
        justify-content: space-between;
        background-color: #ebf9f5;
        color: #00b386;
        width: 120px;
        font-size: 22px;
        font-weight: 600;
        .value{
            margin-left: auto;
            span{
            padding-left: 5px;
            }
        }
        
    }
`;
export default CalLabel;
