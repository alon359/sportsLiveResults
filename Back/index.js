const Express = require('express')
const axios = require('axios');
const GetData = require('./routes/getData')
const DayFormat = require('./DayFormat');
require('dotenv').config()
const app = Express()
const dayFormat = new DayFormat();
const port = 3000

app.use("/getData", GetData)


app.get('/', (req, res) =>{
    res.send('You get root page')
})




app.listen(3000, async() =>{
    console.log('Listen to port ' + 3000);
    setTimeout(()=>{
        console.log(dayFormat.getFormatStr());
    },5000)   
})