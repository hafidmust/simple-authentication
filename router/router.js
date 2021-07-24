const router = require('express').Router()


const auth = require('../controllers/authController')

const restrict = require('../middlewares/restrict')


router.get('/',restrict,(req,res)=>res.render('index'))

router.get('/register',(req,res)=>res.render('register'))
router.post('/register',auth.register)

router.get('/login',(req,res)=>res.render('login'))
router.post('/login',auth.login)

router.post('/api/v1/login',auth.loginJwt)

//router.get('/whoami',restrict,auth.whoami)
router.get('/api/v1/auth/whoami',restrict,auth.whoami)
// router.post('/login',passport.authenticate('local',{
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
// }))


module.exports = router
