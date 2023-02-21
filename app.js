// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000


// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  // res.send('this will be a radom password generator.')
  res.render('index')
})

app.post('/', (req, res) => {
  // 抓取bodyParser資料
  console.log('req.body', req.body)
  res.render('index')
})



// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})