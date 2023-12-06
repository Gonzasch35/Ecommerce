const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {

    sequelize.define('venta', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descuento: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { timestamps: false })
}