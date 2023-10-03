import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputBox from "../components/InputBox";
import axios from "axios";

interface User {
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface MyError {
  response: {
    data: {
      statusCode: number;
      message: string;
    };
  };
}
type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

//---------------------React Login Component-----------------------
const Login: React.FC = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange: ChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const SubmitUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      toast.error("Please fill all input fields", { autoClose: 4000 });
      return null;
    }
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        user
      );
      localStorage.setItem("auth", JSON.stringify(response.data));
      toast.success("Login successfuly", { autoClose: 4000 });
      navigate("/profile");
    } catch (error: MyError | any) {
      if (error.response?.data?.statusCode === 401) {
        toast.error(error.response.data.message);
        return null;
      }
      console.log(error);
      return null;
    }
  };
  return (
    <Container>
      <form method="post" onSubmit={SubmitUser}>
        <InputBox
          boxType={"email"}
          name={"email"}
          placeHolder={"Enter email"}
          handleChange={handleChange}
        />
        <InputBox
          boxType={"password"}
          name={"password"}
          placeHolder={"Enter password"}
          handleChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
      <p>
        <Link to="/signup">Create new user</Link>
      </p>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 480px;
  gap: 1rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    button {
      display: block;
      width: 100px;
      margin: auto;
      padding: 0.5rem;
      font-size: 1rem;
      color: white;
      background-color: #007cc4;
      border: none;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  p {
    a {
      text-decoration: none;
      color: blue;
      font-size: 1rem;
    }
  }
`;

export default Login;
