const User = require('../models/User.js'); 


const JWT_SECRET = process.env.JWT_SECRET

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Nome de usuário e senha são obrigatórios.' });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Nome de usuário ou senha inválidos.' });
    }

    const isMatch = await bcrypt.compare(password, user.senha);

    if (!isMatch) {
      return res.status(401).json({ error: 'Nome de usuário ou senha inválidos.' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
};

module.exports = { login};
