const express = require('express')
const axios = require('axios');
const getData = require('./routes/getData')
require('dotenv').config()
const app = express()
const port = 3000

app.use("/getData", getData)


app.get('/', (req, res) =>{

})




app.listen(process.env.PORT, () => console.log(process.env.PORT))