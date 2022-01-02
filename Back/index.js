const Express = require('express')
const axios = require('axios');
const getData = require('./routes/getData')
const DayFormat = require('./DayFormat');
require('dotenv').config()
const app = Express()
const dayFormat = new DayFormat();
const port = 3000

app.use("/getData", getData)


app.get('/', (req, res) =>{
    res.send('You get root page')
})




app.listen(process.env.PORT, () =>{
    // console.log(process.env.PORT);
     //console.log(dayFormat.printToday());
     console.log(dayFormat.getFormatStr());
})