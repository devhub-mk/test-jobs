import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${location.state.id}`)
      .then((data) => {
        setUser(data.data.data);
        setLoading(false);
      });
  }, []);
  return (
    <Container>
      {loading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="profile">
            <h2>{`Hello!! I am ${user.first_name} ${user.last_name}`}</h2>
            <div className="back-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>
          </div>
          <div className="user-card">
            <div>
              <img src={user.avatar} alt={user.first_name} />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};
const Container = styled.div`
  padding: 2rem 4rem;
  .loading {
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 1rem;
      font-weight: 500;
    }
  }
  .profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .back-svg {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
      background-color: #dadada;
      border-radius: 50%;
      cursor: pointer;
      svg {
        height: 25px;
        width: 25px;
      }
    }
  }
  .user-card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    div {
      /* height: 250px; */
      border: 1px solid #dadada;
      overflow: hidden;
      img {
        height: 160px;
        width: 200px;
        object-fit: cover;
      }
      h3 {
        font-size: 1rem;
        font-weight: 500;
        padding: 0.5rem 0.2rem 0;
      }
      p {
        font-size: 1rem;
        padding: 0 0.2rem 0.6rem;
      }
    }
  }
`;

export default Details;
