const router = require('express').Router();

router.use('/',[
  require('./health-check.route')
]);

module.exports = router