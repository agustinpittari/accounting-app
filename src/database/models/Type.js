module.exports = (sequelize, dataTypes) => {
    let alias = 'Type';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING
        }
    };
    let config = {
        timestamps: false
    }
    const Type = sequelize.define(alias, cols, config)

    Type.association = (models) => {
        Type.hasMany(models.Operation, {
            as: 'operations',
            foreignKey: 'typeId'
        })
    }

    return Type
}