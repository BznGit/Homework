let express = require('express'); 
let app = express();
app.use(express.static('public')); 
let route = require('./routes/signin.js'); 
app.use('/login', route); 
app.listen(80); 