let express = require('express'); 
let router = express.Router(); 
let bodyParser = require('body-parser');
let user={};
router.use(bodyParser.urlencoded({ extended: false }));
router.post('/:ass', (req, res, next)=>{ 
    console.log('Параметры POST запроса: ' + JSON.stringify(req.body));
    user.log = req.body.log;
    console.log(req.body.log)
    res.render('index', user)
});
module.exports = router; //Экспортируем роутер из модуля

