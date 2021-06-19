const express = require('express')
const app = express()
const port = 3000
const { routes } = require('./routes')

app.use(express.json())

routes(app)

app.listen(port, () => {
  console.log(`App listening at port ${port}.`)
})
