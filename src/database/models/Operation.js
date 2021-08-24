module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Operation';
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        concept: {
            type: dataTypes.STRING
        },
        amount: {
            type:dataTypes.INTEGER,
            null: false
        },
        date: {
            type : dataTypes.DATE
        },
        userId: {
            type: dataTypes.INTEGER
        },
        typeId: {
            type: dataTypes.INTEGER
        }
    };
    
    let config = {
        timestamps: false
    };
    
    const Operation = sequelize.define(alias, cols, config);

    Operation.associate = (models) => {
        Operation.belongsTo(models.Type, {
            as: 'type',
            foreignKey: 'typeId'
        });

        Operation.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId'
        });
    };

    return Operation;
    
};