import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center; /* Alinha os inputs ao centro */
    width: 100%;
  }
`;


const Titulo = styled.h2`
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
  width: 100%;
  max-width: 300px;
`;


const CheckboxContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  color: gray;
`;

const Botao = styled.button`
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

  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [roleId, setRoleId] = useState('1');
  const [erro, setErro] = useState('');

  async function handleCadastro(e) {
    e.preventDefault();
    setErro('');

    if (senha !== repetirSenha) {
      setErro('As senhas não coincidem');
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/auth/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha, role: roleId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || 'Erro ao cadastrar usuário');
        return;
      }

      alert('Cadastro realizado com sucesso! Você já pode fazer login.');
      navigate('/login');

    } catch {
      setErro('Erro de conexão com o servidor');
    }
  }

  return (
    <Container>
      <Card>
        <LogoSection>
          <img src={logo} alt="Logo" style={{ width: '90%', marginBottom: '20px' }} />
        </LogoSection>

        <FormSection>
          <Titulo>Faça o seu cadastro</Titulo>

          <form onSubmit={handleCadastro}>
            <Input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Repetir senha"
              value={repetirSenha}
              onChange={e => setRepetirSenha(e.target.value)}
              required
            />

            <CheckboxContainer>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="1"
                  checked={roleId === '1'}
                  onChange={e => setRoleId(e.target.value)}
                />{' '}
                Sou aluno
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="2"
                  checked={roleId === '2'}
                  onChange={e => setRoleId(e.target.value)}
                />{' '}
                Sou professor
              </label>
            </CheckboxContainer>

            <Botao type="submit">Confirmar</Botao>
          </form>
          {erro && <ErroMsg>{erro}</ErroMsg>}
        </FormSection>
      </Card>
    </Container>
  );
};

export default Cadastro;
