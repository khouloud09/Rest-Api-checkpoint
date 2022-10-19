const express = require ('express');
const app = express();

require('dotenv').config({path: "./config/.env"});
const port = process.env.Port;
const DBconnect = require('./config/DB_Connect');
DBconnect();


app.use(express.json())
app.use('/user',require('./routes/userRoute'));



app.listen(4000,(err)=> 
err? console.log(err) : console.log(`server is running ${4000}`));