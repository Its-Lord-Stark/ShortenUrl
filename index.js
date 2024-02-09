const express = require("express");
const {connectToMongo} = require("./connect");
const urlRoute = require("./routes/url")

const app = express();
const PORT = 8000;

connectToMongo("mongodb://localhost:27017/short-url")
.then(()=>{
    console.log('MongoDB connected');
})

app.listen(PORT,()=>
{
    console.log("Running");
})