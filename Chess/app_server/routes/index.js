var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('index', { title: 'Express' });
});

/*GET chess Page */
router.get('/chess/', (req,res,next) =>{
  var board1 = Chessboard('board1', 'start');
  res.render('color',{
    title: 'Chess Page',
    board1: board1
  });

});



module.exports = router;
