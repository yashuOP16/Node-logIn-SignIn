const modual = require('../Modules/userModual')

const defaultController = async (req, res) => {

    const name = req.cookies.userName;

    if (name) {

        // const Message = await modual.findById(id)
        // console.log('done' ,Message);
        

        res.render('index', { name })

    } else {

        res.redirect('/logIn')

    }

}

const LogInController = async (req, res) => {

    res.render('login')

}

const signUpController = async (req, res) => {

    res.render('SignUp')

}

module.exports = { defaultController, LogInController, signUpController }