const Express = require('express')
const axios = require('axios');
const GetData = require('./routes/getData')
const DayFormat = require('./DayFormat');
require('dotenv').config()
const app = Express()
const process = require('process');
const dayFormat = new DayFormat();
const port = 3000

// app.use(Express.static(process.cwd() +  "/dist/sportLive/"))
app.use("/getData", GetData)
console.log(process.cwd());

app.get('/', (req, res) =>{
    // res.sendFile(process.cwd() + "/dist/sportLive/index.html")
    res.send('work')
})


app.listen(3000, async() =>{
    console.log('Listen to port ' + 3000);  
    console.log(dayFormat.getFormatStr());
})