const express = require('express');
const router = express.Router();
var axios = require("axios").default;


var options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '4af38228aemsh7e99fcb40eb6662p10f693jsn5a8bd611e0d9'
    }
  };

router.
route('/')
.get((req, res)=>{
    axios.request(options).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    
})



module.exports = router;