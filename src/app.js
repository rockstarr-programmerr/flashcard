const express = require('express')
const app = express()
const port = 3000
const { sequelize } = require('./db/index.js')

app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate()
    res.send('auth success')
  } catch (error) {
    res.send('auth failed')
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
