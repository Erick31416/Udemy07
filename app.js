const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//express hbs engine
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');


app.get('/',(req,res)=>{

    res.render('home',{
        nombre: 'Ricardo martin arandA'
    });
});
app.get('/about',(req,res)=>{

    res.render('about');
});

app.get('/data',(req,res)=>{

    res.send('hola data');
});


app.listen(port,()=>{
    console.log(`puerto ${ port }`);
});