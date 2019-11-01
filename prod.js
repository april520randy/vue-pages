const express = require('express')
const app = express()
app.use(express.static('./dist'))
const port = process.env.PORT || '1000'
app.listen(port,(err)=>{
  if(err) return err
  console.log(`listening at http://localhost:${port}`)
})
