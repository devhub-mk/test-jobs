import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface UserData {
  name: String;
  email: String;
  avatar: String;
}
const Profile: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth");

  //-----------Log out function----------------
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!auth) {
          navigate("/");
          return;
        }
        const { access_token }: { access_token: string } = JSON.parse(auth);
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [auth, navigate]);
  return (
    <Container>
      {userData && (
        <>
          <div>
            <p>Hiii my Name is: {userData.name}</p>
            <p>My email address is: {userData.email}</p>
          </div>
          <button onClick={logout}>Log Out</button>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  min-height: 480px;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button {
    height: 35px;
    width: 100px;
    cursor: pointer;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
  }
`;

export default Profile;
