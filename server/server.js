const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/myRoute')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api',router)

mongoose.connect(process.env.DATABASE)
.then(()=>console.log('connect database ✅'))
.catch((err)=>console.log(err,'❌'))

const port = process.env.port

app.listen(port,()=>console.log('connect server port',port,'✅'))