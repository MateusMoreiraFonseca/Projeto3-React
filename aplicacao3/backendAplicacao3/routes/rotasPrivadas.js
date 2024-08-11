const express = require('express');
const router = express.Router();
const autenticacao = require('../middlewares/autenticacao');
const { buscarDados } = require('../controllers/buscaController'); // Ajuste o caminho conforme necessário

// Busca (protegido por autenticação)
router.get('/buscar', autenticacao, buscarDados);

// Inserção (protegido por autenticação)
// router.post('/inserir', autenticacao, inserirDados);

module.exports = router;
