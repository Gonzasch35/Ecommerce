require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialect: 'postgres',
  ssl: true,  // Habilita SSL/TLS
  dialectOptions: {
    ssl: {
      require: true,  // Requiere SSL
      rejectUnauthorized: false, // Opcional: Desactiva la verificación del certificado (¡No recomendado para entornos de producción sin verificar!)
    },
  },
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Producto, User, Category, Venta } = sequelize.models;

// Aca vendrian las relaciones
Category.hasMany(Producto);
Producto.belongsTo(Category);

User.hasMany(Venta);
Venta.belongsTo(User);

Venta.belongsToMany(Producto, {through: 'venta_producto'})
Producto.belongsToMany(Venta, {through: 'venta_producto'})

User.belongsToMany(Producto, {through: 'user_favorito'})
Producto.belongsToMany(User, {through: 'user_favorito'})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
