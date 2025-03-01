const express = require("express");
const fs = require("fs");
const path = require("path");
const routes = require('./routes/index');
const app = express();

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));


//MIDDLEWARES
app.use(express.json()); // Middleware para JSON
app.use(express.urlencoded({extended: false}));  // Middleware para URL-encoded


//ROUTES
app.use('/', routes);

//STATIC FILES
app.use(express.static(path.join(__dirname,'public')));

//ERROR HANDLING

app.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).send('Houston we got a problem');
})

//START THE SERVER
app.listen(app.get('port'), ()=>{
  console.log(`Server on port: http://localhost:${app.get('port')}`);
})

