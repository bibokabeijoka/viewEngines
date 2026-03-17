var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Revolução Russa', descricao: 'A Revolução Russa foi um conjunto de eventos políticos e sociais que ocorreram na Rússia em 1917.' });
});

module.exports = router;

router.get('/sigmas', function(req, res, next) {
  res.render('sigmas', { title: 'sigmas' });
});

module.exports = router;

