const express = require('express');
const router = express.Router();
const autenticacao = require('../middlewares/autenticacao');
const { buscarDados } = require('../controllers/buscaController'); // Ajuste o caminho conforme necessário

// Busca (protegido por autenticação)
router.get('/buscarDados', autenticacao, buscarDados);
// router.post('/persons', createPersonController);
// router.get('/buscarPersons', autenticacao, buscarPersons);
// router.get('/persons/:id', getPersonByIdController);

// Inserção (protegido por autenticação)
// router.post('/inserir', autenticacao, inserirDados);

module.exports = router;
