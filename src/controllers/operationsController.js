const {Operation, Type, User} = require('../database/models')

module.exports = {
    list: async (req, res) => {
        let operations = await Operation.findAll();
        return res.json({
            total: operations.length,
            data: operations
        });
    },
    byType: async (req, res) => {
        let typeId = req.params.typeId;
        let operationsByType = await Operation.findAll({
            where: {
                typeId
            },
            include: ['type', 'user']
        })

        if(operationsByType.length == 0){
            return res.json({
                msg: "No existen operaciónes para este tipo"
            })
        }

        return res.json(operationsByType)
    },
    create: async (req, res) => {
        try {
            let newOperation = await Operation.create(req.body);

            return res.status(201).json({
                meta:{
                    status: 201,
                    msg: "Created"
                },
                data: newOperation
            });
        } catch (error) {
            return res.send(error);
        }
    }
}