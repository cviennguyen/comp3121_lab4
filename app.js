const express = require("express")
const SERVER_PORT = 3001

const app = express()

app.use(express.static("./statics"))


app.get('/hello',(req,res)=> {
  res.status(200).send("Hello Express JS")
})


//path para
app.get("/user/:fnm/:lnm",(req,res)=> {

  const s = req.params
  const first_name = s.fnm
  const last_name = s.lnm
  const newU = {
    first_name,
    last_name,
  }

  res.json(newU)
})

//queryString
app.get("/user",(req,res)=> {
  res.send(req.query)
})


app.listen(SERVER_PORT,() => {
  console.log(`App running on port ${SERVER_PORT}...`)
})

//localhost:8080/student?id=1&fistname=V: queryString
//localhost:8080/student/1/Vien/Nguyen: path parameter