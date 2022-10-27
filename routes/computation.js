var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random.toFixed(2);
  }
  
  let Tan = Math.atan(x).toFixed(2)  
  let Exp = Math.exp(x).toFixed(2)
  let Expm = Math.expm1(x).toFixed(2)
 
  res.render('computation', {
    title: 'Computation',
    x1: 'applied to ' + x  + ' is ' + Tan,
    x2: 'applied to ' + x + ' is ' + Exp,
    x3: 'applied to ' + x + ' is ' + Expm,
    
  });
});

module.exports = router;