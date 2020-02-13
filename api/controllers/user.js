const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const models = require('../db/models')
const User = models.user

exports.authenticate = (req, res, next) => {
    const { username, password } = req.body

    User.findOne({ where: { username }, include: [ models.task ] }).then(user => {
        if(!user) {
            res.status(404).json({ message: 'User not found' })
        }
        else {
            bcrypt.compare(password, user.password).then(pwdIsCorrect => {
                if (user && pwdIsCorrect) {
                    const token = jwt.sign({ sub: user.id }, process.env.SECRET);
                    res.json({
                        id: user.id,
                        username: user.username,
                        password: user.password,
                        tasks: user.tasks,
                        token
                    });
                }
                else {
                    res.status(400).json({ message: 'Incorrect password' })
                }
            }).catch(err => next(err))
        }
    }).catch(err => next(err))
}

exports.register = (req, res, next) => {
    const { username, password } = req.body
    
    User.findOne({ where: { username: username } }).then(user => {
        if(user) {
            res.status(409).json({ message: 'Username "' + username + '" is already taken' })
        }
        else {
            User.create({ 
                username: username, 
                password: bcrypt.hashSync(password, 10)
            }).then(() => {
                res.json({ message: "User successfully created!"})
            }).catch(err => next(err))
        }
    }).catch(err => next(err))
}

