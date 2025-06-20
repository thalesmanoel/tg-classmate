import { useState } from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaBell, FaChartLine, FaBars, FaThLarge } from 'react-icons/fa';
import { IoMdBook, IoMdCard, IoMdHelpCircle } from 'react-icons/io';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #222;
  color: white;
  overflow: hidden;
`;

const Sidebar = styled.div`
  background-color: #0094b9;
  width: ${props => (props.open ? '250px' : '80px')};
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #007ca0;
  border-radius: 20px;
  padding: 10px;
  width: 100%;

  h3 {
    font-size: 16px;
    margin: 5px 0 0 0;
  }

  span {
    font-size: 12px;
    margin-top: -2px;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.open ? 'flex-start' : 'center')};
  font-size: 16px;
  gap: 10px;
  padding: 12px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #007b9e;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #00c2f5;
  }

  span {
    display: ${props => (props.open ? 'inline' : 'none')};
  }
`;


const ToggleButton = styled(MenuButton)`
  margin-top: 10px;
  font-size: 22px;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #2a2a2a;
  overflow-y: auto;
`;

const Title = styled.h1`
  color: #00c2f5;
  font-size: 28px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: ${props => props.bg || '#004'};
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const CardItem = styled.p`
  margin: 5px 0;
  font-size: 15px;
`;

const MenuAluno = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <Container>
      <Sidebar open={sidebarOpen}>
        <SidebarTop>
          <UserInfo>
            <FaUserCircle size={28} />
            <h3>João</h3>
            <span>Aluno</span>
          </UserInfo>

          <ToggleButton onClick={toggleSidebar} open={sidebarOpen}>
            <FaBars />
          </ToggleButton>

          <MenuButton open={sidebarOpen}><FaThLarge /><span>Menu</span></MenuButton>
          <MenuButton open={sidebarOpen}><IoMdBook /><span>Matérias</span></MenuButton>
          <MenuButton open={sidebarOpen}><IoMdCard /><span>Assinatura</span></MenuButton>
          <MenuButton open={sidebarOpen}><FaBell /><span>Notificações</span></MenuButton>
          <MenuButton open={sidebarOpen}><FaChartLine /><span>Dashboard</span></MenuButton>
        </SidebarTop>

        <MenuButton open={sidebarOpen}><IoMdHelpCircle /><span>Suporte</span></MenuButton>
      </Sidebar>

      <MainContent>
        <Title>MENU ALUNO</Title>

        <Grid>
          <Card bg="#1c1c1c">
            <CardTitle>DASHBOARD</CardTitle>
            <CardItem>12 Mentorias</CardItem>
            <CardItem>Calendário de Mentorias</CardItem>
            <CardItem>Estatísticas</CardItem>
          </Card>

          <Card bg="#00bcd4">
            <CardTitle>Mentoria</CardTitle>
            <CardItem>Matérias</CardItem>
            <CardItem>Professores</CardItem>
          </Card>

          <Card bg="#002f6c">
            <CardTitle>Fazer Prova</CardTitle>
            <CardItem>ENEM</CardItem>
            <CardItem>Vestibular</CardItem>
            <CardItem>Matérias</CardItem>
          </Card>

          <Card bg="#0d1d44">
            <CardTitle>Provas Feitas</CardTitle>
            <CardItem>Exercícios</CardItem>
            <CardItem>ENEM</CardItem>
            <CardItem>Vestibulares</CardItem>
            <CardItem>Concursos</CardItem>
          </Card>
        </Grid>
      </MainContent>
    </Container>
  );
};

export default MenuAluno;