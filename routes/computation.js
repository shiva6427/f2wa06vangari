var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var s;
  
  var random = Math.random();
  console.log(req.query.s);
  x = req.query.s;

  // checking if url has params
  if (s == undefined) {
    s = random.toFixed(2);
  }
  
  let Tan = Math.atan(s).toFixed(2)  
  let Exp = Math.exp(s).toFixed(2)
  let Expm = Math.expm1(s).toFixed(2)
 
  res.render('computation', {
    title: 'Computation',
    Calculate: `applied to ` + s  + ` is ` + Tan,
    c1: `applied to ` + s + ` is ` + Exp,
    c2: `applied to ` + s + ` is ` + Expm,
    
  });
});

module.exports = router;