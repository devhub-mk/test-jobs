import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Details from "./pages/Details";
const App = () => {
  return (
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  margin: 0;
  padding: 2rem;
`;

export default App;
