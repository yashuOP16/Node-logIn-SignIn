const express = require('express');
const app = express();
const env = require('dotenv');
env.config()
const PORT = process.env.PORT
const path = require('path')
const myPath = path.join(__dirname , "/Views") 
const bodyParser = require('body-parser')
const routers = require('./Routers/router');
const db = require('./Config/db');
const cookie = require('cookie-parser')

app.set('view engine','ejs')
app.set('Views',myPath)

app.use(express.static(myPath))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookie())
app.use('/',routers)


app.listen(PORT , (err)=>{
    if(!err){
        console.log(`Server is running on port http://localhost:${PORT}`)
    }
})