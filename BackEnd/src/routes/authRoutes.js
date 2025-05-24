import express from 'express';
import { cadastrarUsuario, login } from '../controllers/authController.js';
import { autenticarToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/cadastro', cadastrarUsuario);
router.post('/login', login);
router.get('/protegida', autenticarToken, (req, res) => {
  res.json({ mensagem: 'Acesso concedido à rota protegida', usuario: req.usuario });
});

export default router;