const Express = require('express')
const axios = require('axios');
const GetData = require('./routes/getData')
const DayFormat = require('./DayFormat');
require('dotenv').config()
const app = Express()
const dayFormat = new DayFormat();
const port = 3000

const user = ['alon']
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
app.use("/getData", GetData)


app.get('/', (req, res) =>{
    res.json(user)
})




app.listen(3000, async() =>{
    console.log('Listen to port ' + 3000);
    setTimeout(()=>{
        console.log(dayFormat.getFormatStr());
    },5000)   
})