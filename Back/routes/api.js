const express = require('express');
const router = express.Router();
var axios = require("axios").default;


router.
route('/getData')
.get((req, res)=>{
    res.send('galit smoking')
})



module.exports = router;