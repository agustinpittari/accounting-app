module.exports = (sequelize, dataTypes) => {

    return Operation = sequelize.define(
        'Operation',
        {
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
            },
        },
        {
            timestamps: false
        }
    )

}