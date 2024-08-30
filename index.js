const express = require('express')


const app = express()
app.use(express.json())

app.get('/api/get',(req,res)=>{
  res.send(message="this is node.js server")
})


app.listen(8000,()=>{
    console.log("server is running on http://localhost:8000")
})