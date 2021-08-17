module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: dataTypes.STRING
            },
            password: {
                type: dataTypes.STRING
            }
        },
        {
            timestamps: false,
        }
    )

    return User
}