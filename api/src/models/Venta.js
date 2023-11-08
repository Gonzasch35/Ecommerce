const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {

    sequelize.define('venta', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        descuento: {
            type: DataTypes.INTEGER,
        }
    })
}