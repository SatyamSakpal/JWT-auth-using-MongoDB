const authController = require('../controllers/authController')
const {Router} = require('express') 
const router = Router()

router.get('/login',authController.loginGet)

router.post('/login',authController.loginPost)

router.get('/signup',authController.signupGet)

router.post('/signup',authController.signupPost)

router.get('/logout', authController.logout)

module.exports = router