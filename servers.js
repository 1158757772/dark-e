const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db/connect');
const userRouter = require('./router/userRouter');
const foodRouter = require('./router/foodRouter');
const fileRouter = require('./router/fileRouter');

const app = express();

app.use( '/static' , express.static( path.join( __dirname , './public' ) ) );

app.use('/',bodyParser.json()); //解析json数据
app.use('/',bodyParser.urlencoded({extened: false})); // 解析表单数据

app.use( '/user' , userRouter );
app.use( '/food' , foodRouter );
app.use( '/file' , fileRouter );

app.listen( 3000 , ()=>{
    console.log('=========server start=========');
} )

