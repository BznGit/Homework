let express = require('express'); 
let mustacheExpress = require('mustache-express');
let app = express();
app.set('views', __dirname + '/views');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.use(express.static('public')); 
let route = require('./routes/signin.js'); 
app.use('/login', route);
app.listen(80); 