import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Container = styled.div`
  background-color: #222;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #005763;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  width: 800px;
  max-width: 90%;
  gap: 40px;
`;

const LogoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #00404a;
  color: #fff;
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  color: gray;
`;

const Button = styled.button`
  background-color: #00c2f5;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #00a5d1;
  }
`;

const Cadastro = () => {
  return (
    <Container>
      <Card>
        <LogoSection>
          <img src={logo} alt="Logo" style={{ width: '90%', marginBottom: '20px' }} />
        </LogoSection>

        <FormSection>
          <Title>Faça o seu cadastro</Title>

          <Input type="text" placeholder="Nome completo" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
          <Input type="password" placeholder="Repetir senha" />

          <CheckboxContainer>
            <label>
              <input type="checkbox" /> Sou aluno
            </label>
            <label>
              <input type="checkbox" /> Sou professor
            </label>
            <label>
              <input type="checkbox" /> Sou administrador
            </label>
          </CheckboxContainer>

          <Button>Confirmar</Button>
        </FormSection>
      </Card>
    </Container>
  );
};

export default Cadastro;
