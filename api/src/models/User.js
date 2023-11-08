const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {

    sequelize.define('user', {
        id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
        },
        confirm: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, { timestamps: false })
}