const userModule = require('../Modules/userModual')
const bcrypt = require('bcrypt')


const LogInForm = (req , res) => {

    res.render('logIn')

}

const logInController =async (req, res) => {

    console.log('data', req.body);
    const userLogIn =await userModule.find({ email: req.body.email })
    console.log("user" ,userLogIn);
    

    if (userLogIn) {

        bcrypt.compare(req.body.password, userLogIn[0].password, async (err, result) => {

            if (result) {
                // console.log("done");
                res.cookie('userId' , userLogIn[0]._id.toString())
                res.cookie('userName' , userLogIn[0].name )
                res.redirect('/')

            } else {
                console.log("error");
                res.redirect('/SignUp')

            }

        })

    } else {

        res.redirect('/SignUpForm')
    }


}

const LogOutController = (req , res) => {

    res.clearCookie('userId')
    res.redirect('/logInForm')

}

module.exports = { logInController, LogInForm , LogOutController}