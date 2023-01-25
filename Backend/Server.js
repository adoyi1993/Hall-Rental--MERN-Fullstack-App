const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Port = process.env.Port || 6000;
const Router = require("./Routes/hallRoutes")
const bodyparser = require('body-parser')
const cors = require("cors")
const cookieParser = require("cookie-parser")

// middleware
app.use(express.json());
app.use(cookieParser())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())
app.use('/api/v1/', Router)





//-------------------------connect mongoose and fire the server
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MongoURI, {useUnifiedTopology: true, useNewUrlParser: true}).
then(()=>{console.log("Database Connected successfully")}).
then(()=>{app.listen(Port, ()=>{console.log(`server listening on Port ${Port}`)})}).
catch((error)=>{console.log(error)})
