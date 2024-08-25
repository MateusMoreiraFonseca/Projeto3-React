const express = require('express');
const router = express.Router();
const autenticacao = require('../middlewares/autenticacao');
const { salvarDados } = require('../controllers/fakeDataController');
const { buscarDados, apagarDados} = require('../controllers/dataController');


router.post('/salvarDados', autenticacao, salvarDados);

router.get('/buscarDadosSalvos', autenticacao, buscarDados);
router.delete('/excluirDadosSalvos', autenticacao, apagarDados);




module.exports = router;
