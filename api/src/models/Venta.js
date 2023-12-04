const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {

    sequelize.define('venta', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        precio: {
            type: DataTypes.DECIMAL,
            allowNull: false,
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
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, { timestamps: false })
}