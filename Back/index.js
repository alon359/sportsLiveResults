const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hi galit, Lets go to smoke !'))
app.listen(port, () => console.log(process.env.x))