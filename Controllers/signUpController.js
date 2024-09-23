const userModule = require('../Modules/userModual');
const bcrypt = require('bcrypt')
const saltround = 5;

const SignUpForm = (req, res) => {

    res.render('/SignUp')

}

const SignUpController = async (req, res) => {

    console.log('users', req.body);

    if (req.body.password === req.body.conpassword) {

        bcrypt.hash(req.body.password, saltround, async (err, hashPass) => {

            console.log('hash', hashPass);
            const user = await new userModule({

                name: req.body.name,
                email: req.body.email,
                password: hashPass

            })

            const CreateUser = await user.save();

            console.log('user', CreateUser);

            res.cookie('UserId', CreateUser);

            res.redirect('/logIn')

        })

    } else {

        res.redirect('/')

    }


}

module.exports = { SignUpController, SignUpForm }