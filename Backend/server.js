require('dotenv').config();
const app = require('./src/app')
const express = require('express')
const connectDB = require('./src/db/db')
const path = require("path");


app.use(express.static(path.join(__dirname, "../Frontend")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/HTML/feed.html"));
});
connectDB()
app.listen(3000, ()=>{
    console.log("Server live @port 3000")
})