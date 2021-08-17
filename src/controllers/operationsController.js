const {Operation} = require('../database/models')

module.exports = {
    list: (req, res) => {
        res.send('list Method')
    },
    create: (req, res) => {
        Operation.create(req.body)
        console.log(req.body);
    }
}