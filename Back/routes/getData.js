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
    params: {league: '140', season: '2021',from:'2022-03-10', to: '2022-03-11'},
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '4af38228aemsh7e99fcb40eb6662p10f693jsn5a8bd611e0d9'
    }
  };

    axios.request(options).then(function (response) {
        res.send(response.data);
        console.log(response.data.response[0].teams.home.name);
    }).catch(function (error) {
        console.error(error);
    });
})



module.exports = router;