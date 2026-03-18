const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    descricao: 'Bem-vindo à página inicial.',
    ano: new Date().getFullYear()
  });
});

module.exports = router;