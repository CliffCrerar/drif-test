// express server
const express = require('express')
const {createReadStream} = require('fs')
const app = express()
// app.use(express.static('public'));
app.get('/',(req,res)=>createReadStream('./index.html').pipe(res.status(200)))
app.listen(3000);

