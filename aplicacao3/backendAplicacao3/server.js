const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./middlewares/BD'); // Importa a configuração do banco de dados
const rotasPublicas = require('./routes/rotasPublicas.js');
const rotasPrivadas = require('./routes/rotasPrivadas.js');
require('dotenv').config(); // Carregar variáveis do arquivo .env

const app = express();
const PORT = process.env.PORT || 3000; // Usa a porta do .env ou 3000 por padrão

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Usar as rotas definidas
app.use('/api', rotasPublicas);
app.use('/logged', rotasPrivadas);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
