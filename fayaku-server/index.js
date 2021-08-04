const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const cors = require('cors')

require('dotenv/config')

app.use(cors())

const adminRouter = require('./routers/adminRouter')
const authRouter = require('./routers/authRouter')
const apiRouter = require('./routers/apiRouter')

port = process.env.PORT || 8000
//Setup database
const uri = 'mongodb+srv://user:user@learningmongo1.89tk5.gcp.mongodb.net/fayakuShop?retryWrites=true'
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false);
const db = mongoose.connection
mongoose.connect(process.env.DB_CONNECTION || uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useCreateIndex: true })
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//End DB Section

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(passport.initialize())
app.use(cookieParser());

app.use('/api', apiRouter)
app.use('/admin', adminRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.send('Welcome to Fayaku Shop')
})

app.use((req, res) => {
    res.status(404).json({ code: 404, message: 'API not found' })
})

app.listen(port, () => {
    console.log('Listening on http://localhost:' + port)
})

