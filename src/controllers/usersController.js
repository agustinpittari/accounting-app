const bcrypt = require('bcryptjs')
const {User} = require('../database/models')

module.exports = {
    create: async(req, res) => {
        if (req.body.email && req.body.password) {
            let emailAlreadyExists = await User.findOne({where: {email: req.body.email}})
            if(emailAlreadyExists){
                return res.status(400).json({
                    meta:{
                        status: 400,
                        msg: "Email Already in use. Please try again with another email"
                    }
                })
            }else{
                let newUser = await User.create({
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10)
                });
                return res.status(201).json({
                    meta:{
                        status: 201,
                        msg: "Created"
                    },
                    data: newUser
                });
            }
        }
        return res.status(400).json({
            meta:{
                status: 400,
                msg: "missing email or password"
            }
        })

    }
}