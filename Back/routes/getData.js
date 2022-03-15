const express = require('express');
const router = express.Router();
const axios = require("axios").default;

const Dayformat = require('../DayFormat')

const today = new Date();
const dayFormat = new Dayformat()

var options1 = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
  params: {league: '140', season: '2021',from:dayFormat.getFormatStr(), to: dayFormat.getFormatStr()},
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '4af38228aemsh7e99fcb40eb6662p10f693jsn5a8bd611e0d9'
  }
};
var options2 = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
  params: {league: '140', season: '2021',from:'2022-03-15', to: '2022-03-15'},
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '4af38228aemsh7e99fcb40eb6662p10f693jsn5a8bd611e0d9'
  }
};



//Return today spanish football game by api 
router.route('/print')
.get((req,res)=>{
    axios.request(options2).then((respose)=>{
      res.json(respose.data)
    })
})
router.route('/getSpainToday')
.get((req, res)=>{

    axios.request(options2).then(function (response) {
      let teams = []
        for(let i=0;i<response.data.response.length;i++){
          teams.push({
          'Home' : response.data.response[i].teams.home.name,
          'Away':response.data.response[i].teams.away.name,
          'Status': response.data.response[i].fixture.status.long,
          'Goals': [response.data.response[i].goals.home,response.data.response[i].goals.away] })
          
        }
          res.json(teams)
         })
    .catch(function (error) {
        console.error(error);
    });
})



module.exports = router;