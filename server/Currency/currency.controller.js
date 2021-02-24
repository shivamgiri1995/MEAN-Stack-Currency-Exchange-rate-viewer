var express = require('express');
var router = express.Router();
const currencyService = require('./currency.service');

/* GET home page. */
router.get('/',getAll);
router.post('/add',addCurrency);
module.exports = router;



function getAll(req, res, next) {

   currencyService.getAll()
  .then(users => res.json(users))
  .catch(err => next(err));
}


function addCurrency(req, res, next) {

  currencyService.create(req.body)
      .then(() => res.end("Currency added"))
      .catch(err => next(err));
}
