const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('producto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    talle: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        // Validación personalizada para asegurar que solo hay claves específicas y valores numéricos
        esTalleValido(value) {
          const allowedSizes = ['xxl', 'xxxl', 'xl', 'xs', 'm', 's', 'l'];

          for (const key in value) {
            if (!allowedSizes.includes(key) || typeof value[key] !== 'number') {
              throw new Error('El campo "talle" tiene un formato no válido.');
            }
          }
        },
      }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defautValue: 0
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  { paranoid: true },
  { timestamps: false });
};