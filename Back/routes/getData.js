const express = require('express');
const router = express.Router();
const axios = require("axios").default;
const today = new Date();




router.
route('/getSpainToday')
.get((req, res)=>{
  var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {date: '2022-01-02', league: '140', season: '2021'},
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '4af38228aemsh7e99fcb40eb6662p10f693jsn5a8bd611e0d9'
    }
  };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})



module.exports = router;