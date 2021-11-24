const express = require('express')
const app = express()
const http = require('http').Server(app)
const mongoose = require('mongoose')

app.use(require('./routes/checkUniqueMeeting'))
//app.use(require('./routes/createNewMeeting'))
//app.use(require('./routes/joinMeeting'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept')
    res.header('Access-Control-Allow-Origin', '*')
    next();
})

app.get('/', (req, res) => {
    console.log(req);
})

const port = 3080

http.listen(port, () => console.log("Listening on port 3080"))
