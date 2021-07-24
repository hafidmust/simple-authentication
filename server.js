const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('express-flash')
const {PORT = 8000} = process.env

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(session({
    secret: 'buat ini jadi rahasia',
    resave: false,
    saveUninitialized: false
}))


const passport = require('passport')
app.use(passport.initialize())
app.use(passport.session())
app.set('view engine','ejs')
app.use(flash())


const router = require('./router/router')
app.use(router)
app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`)
})