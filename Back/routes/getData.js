const express = require('express');
const router = express.Router();
const axios = require("axios").default;

const Dayformat = require('../DayFormat')

const today = new Date();
const dayFormat = new Dayformat()




//Return today spanish football game by api 
router.
route('/getSpainToday')
.get((req, res)=>{

  var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {league: '140', season: '2021',from:dayFormat.getFormatStr(), to: dayFormat.getFormatStr()},
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '4af38228aemsh7e99fcb40eb6662p10f693jsn5a8bd611e0d9'
    }
  };

    axios.request(options).then(function (response) {
      let teams = []
        for(let i=0;i<response.data.response.length;i++){
          teams.push({'Home' : response.data.response[i].teams.home.name,
          'Away':response.data.response[i].teams.away.name,
          'Status': response.data.response[i].fixture.status.long })
          
        }
          res.json(teams)
         })
    .catch(function (error) {
        console.error(error);
    });
})



module.exports = router;