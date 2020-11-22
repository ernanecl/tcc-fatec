const express = require("express");
const OrganizacaoController = require("../controller/OrganizacaoController");

const router = express.Router();
const organizao = new OrganizacaoController();

router.post('/organizacao/cadastro', organizao.cadastro);

module.exports = router;