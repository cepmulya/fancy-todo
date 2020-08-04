const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

// json
app.use(express.json())
// body form
app.use(express.urlencoded({extended:true}))

app.use('/', routes)

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})