//CONFIG
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./controllers/user')

require('dotenv').config()

const app = express()

//MIDDLEWARE
app.use(express.json())

//ROUTES
app.use('/user', userRoutes)

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB is locked and loaded'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Up and running at port ${PORT}`))