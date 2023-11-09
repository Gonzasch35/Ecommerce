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
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        descuento: {
            type: DataTypes.INTEGER,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, { timestamps: false })
}