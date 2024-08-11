const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateUser = async (username, password) => {
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return { error: 'Nome de usuário ou senha inválidos.' };
    }

    // Comparar senha em texto simples
    if (password !== user.senha) {
      return { error: 'Nome de usuário ou senha inválidos.' };
    }

    // Gerar o token JWT
    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    return { token };
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    return { error: 'Erro ao processar a solicitação.' };
  }
};

module.exports = { authenticateUser };
