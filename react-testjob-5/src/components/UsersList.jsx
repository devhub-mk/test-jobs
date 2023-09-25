import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const UsersList = (props) => {
  const navigate = useNavigate();
  const redirectToDetails = (id) => {
    navigate("/details", { state: { id } });
  };
  return (
    <Container onClick={() => redirectToDetails(props.id)}>
      <img src={props.avatar} alt={props.firstName} />
      <div className="info">
        <h3>{`${props.firstName} ${props.lastName}`}</h3>
        <p>{props.email}</p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  min-width: 350px;
  max-width: 480px;
  height: 70px;
  border: 1px solid #dadada;
  overflow: hidden;
  cursor: pointer;
  img {
    height: 70px;
    width: 70px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
    h3 {
      font-weight: 500;
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
export default UsersList;
