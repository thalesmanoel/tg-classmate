import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


import "react-toastify/dist/ReactToastify.css";

const Container = styled.div` 
  max-width: 900px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;



function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
    <GlobalStyle/>
    <Container>
      <Title>USUÁRIOS</Title>
      <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
      <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
    </Container>
    <ToastContainer autoClose={3000} position="bottom-left" />
    
    </>
  );
}

export default App;
