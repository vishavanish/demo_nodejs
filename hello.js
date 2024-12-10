const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login' ,(req,res)=>{
    res.send("Plz login first")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})