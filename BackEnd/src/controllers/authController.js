import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../models/userModel.js';

const JWT_SECRET = 'sua_chave_secreta_segura';

export async function cadastrarUsuario(req, res) {
  const { nome, email, senha, role } = req.body;

  try {
    const usuarioExistente = await UserModel.buscarUsuarioPorEmail(email);
    if (usuarioExistente) {
      return res.status(400).json({ erro: 'Email já cadastrado' });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    await UserModel.criarUsuario(nome, email, senhaHash, role);
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao cadastrar usuário', detalhes: erro });
  }
}

export async function login(req, res) {
  const { email, senha } = req.body;

  try {
    const usuario = await UserModel.buscarUsuarioPorEmail(email);
    if (!usuario) {
      return res.status(401).json({ erro: 'Usuário não encontrado' });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
    if (!senhaCorreta) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, role: usuario.role_id },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(200).json({ mensagem: 'Login bem-sucedido', token });
  } catch (erro) {
    console.error('Erro no login:', erro);
    res.status(500).json({ erro: 'Erro no login', detalhes: erro });
  }
}
