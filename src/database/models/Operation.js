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

    return Operation
    
}