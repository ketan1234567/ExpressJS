const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World! ketan deshmukh 1234 kkk')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})