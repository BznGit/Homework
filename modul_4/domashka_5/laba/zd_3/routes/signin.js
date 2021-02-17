let express = require('express'); 
let router = express.Router(); 
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.post('/:ass', (req, res, next)=>{ 
    console.log('Параметры POST запроса: ' + JSON.stringify(req.body));
    res.send('Вы вошли! ' + req.params.ass ); //Отправляем клиенту, строчку 'Ok!'
});
module.exports = router; //Экспортируем роутер из модуля

