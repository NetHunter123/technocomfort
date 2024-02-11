const express = require("express")

const dataSource = require("./db/db")

const app = express()

app.use(express.json())


app.get('/', function (req, res) {
  res.send('hello world');
});

dataSource.initialize().then(() => {
  console.log("Database connected!!")

  app.listen(4400, () => {
    console.log("Connected!")
  })

}).catch((err) => {
  console.log(err)
})


