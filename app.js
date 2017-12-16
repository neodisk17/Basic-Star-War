var express =require('express');

var app=express();

app.set('view engine','ejs');


var path = require ('path');
app.use(express.static(path.join(__dirname,'public')));

//Routes

var routes = require('./routes');

app.get('/',routes.home);

app.get('/star_wars_episode/:episode_number?',routes.single_movie);

app.get('*',routes.notFound);

app.listen(process.env.PORT||3000);


