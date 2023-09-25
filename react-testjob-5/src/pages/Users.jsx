import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import UsersList from "../components/UsersList";
import Pagination from "../components/Pagination";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const totalPages = useRef(0);
  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${currentPage}`).then((res) => {
      setUsers(res.data.data);
      totalPages.current = res.data.total_pages;
    });
  }, [currentPage]);


  return (
    <>
      <Container>
        {users.map((user) => {
          return (
            <UsersList
              key={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              avatar={user.avatar}
              id={user.id}
              email={user.email}
              onClick={()=>{console.log("jhii")}}
            />
          );
        })}
      </Container>
      <PaginationCon>
        <Pagination
          totalPages={totalPages.current}
          currentPage={currentPage}
          next={() => setCurrentPage(currentPage + 1)}
          previous={() => {
            setCurrentPage(currentPage - 1);
          }}
        />
      </PaginationCon>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  min-width: 350px;
  justify-content: center;
  margin: auto;
  padding: 80px 10px;
`;
const PaginationCon = styled.div`
  margin: auto;
  width: 400px;
`;
export default Users;
