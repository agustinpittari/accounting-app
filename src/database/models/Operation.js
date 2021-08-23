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
        date: {
            type : dataTypes.DATE
        }
    };
    
    let config = {
        timestamps: false
    };
    
    const Operation = sequelize.define(alias, cols, config);

    Operation.association = (models) => {
        Operation.belongsTo(models.Type, {
            as: 'types',
            foreignKey: 'typId'
        });

        Operation.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId'
        });
    };

    return Operation;
    
};