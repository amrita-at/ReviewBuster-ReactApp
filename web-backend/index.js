
const express = require('express')
var cors = require('cors');

const app = express()
const port = 3001

const app2 = express()
const port2 = 3005


app2.use(express.json());

app2.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app2.use(cors())



app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors())

const sqlRouter = require('./sql_EndPoints')
const noSqlRouter = require('./noSql_EndPoints')


app2.use('/', sqlRouter)
app.use('/', noSqlRouter)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app2.listen(port2, () => {
  console.log(`Example app listening at http://localhost:${port2}`)
})
