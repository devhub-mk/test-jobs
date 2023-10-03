import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import InputBox from "../components/InputBox";

interface User {
  name: string;
  email: string;
  password: string;
  c_password: string;
}

type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface MyError {
  response: {
    status: number;
    data: {
      message: string[];
    };
  };
}
//--------------------------React component---------------------
const Signup: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    c_password: "",
  });

  const navigate = useNavigate();
  const avatarURL: string = "https://picsum.photos/seed/picsum/300/300";

  const handleChange: ChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const CreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      user.email === "" ||
      user.name === "" ||
      user.password === "" ||
      user.c_password === ""
    ) {
      toast.error("Please fill all input fields", { autoClose: 4000 });
      return null;
    }
    if (user.password !== user.c_password) {
      toast.error("Password doesn't match", { autoClose: 4000 });
      return null;
    }
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/users/",
        {
          name: user.name,
          email: user.email,
          password: user.password,
          avatar: avatarURL,
        }
      );

      console.log(response.data);
      toast.success("Registertaion successful", { autoClose: 4000 });
    } catch (err: MyError | any) {
      if (err) {
        if (err.response?.status === 400) {
          toast.error(err.response.data.message[0]);
        }
      } else {
        console.log(err);
        toast.error("Oops something went wrong", { autoClose: 4000 });
      }
      return null;
    }
    navigate("/");
  };

  return (
    <Container>
      <form onSubmit={CreateUser} method="post">
        <InputBox
          name={"name"}
          placeHolder={"Enter fullname"}
          handleChange={handleChange}
        />
        <InputBox
          boxType="email"
          name={"email"}
          placeHolder={"Enter email"}
          handleChange={handleChange}
        />
        <InputBox
          boxType="password"
          name={"password"}
          placeHolder={"Password"}
          handleChange={handleChange}
        />
        <InputBox
          boxType="password"
          name={"c_password"}
          placeHolder={"Confirm password"}
          handleChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?
        <Link to="/">Log In</Link>
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
export default Signup;
