const express = require('express');
const router = express.Router();

/* GET Sigmas page */
router.get('/', (req, res) => {
  const eventos = [
    { ano: 1917, texto: 'Revolução de Fevereiro' },
    { ano: 1917, texto: 'Revolução de Outubro' },
    { ano: 1922, texto: 'Criação da URSS' }
  ];

  res.render('sigmas', {
    title: 'Sigmas',
    descricao: 'Página sobre a Revolução Russa e figuras históricas.',
    eventos: eventos,
    ano: new Date().getFullYear()
  });
});

module.exports = router;