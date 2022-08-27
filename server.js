

const express = require("express");
const cors = require("cors")
require("dotenv").config();
const passport = require("passport");


const app = express();

app.use(cors())

app.use(express.json()) 

const dbconnect=require("./DB_connect");
dbconnect();



app.use('/product', require('./routes/productRouter')); 
app.use("/client", require("./routes/client"))
app.use("/reservation", require("./routes/reservations"))

app.use(passport.initialize());

app.listen(process.env.PORT, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>err?console.log(err):console.log('server is running'))