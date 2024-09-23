const express = require('express')
const router = express.Router();
const routes = require('../Controllers/Controller');
const SignUpcon = require('../Controllers/signUpController');
const LogInCon = require('../Controllers/logInController')

router.get('/', routes.defaultController)
router.get('/login', routes.LogInController)
router.get('/SignUp', routes.signUpController)
router.get('/sigUpForm', SignUpcon.SignUpForm)
router.post('/SignUp', SignUpcon.SignUpController)
router.get('/logInForm', LogInCon.LogInForm)
router.post('/logIn', LogInCon.logInController)
router.get('/LogOut' , LogInCon.LogOutController)


module.exports = router