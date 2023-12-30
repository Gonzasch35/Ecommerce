const {DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize) => {

    const User = sequelize.define('user', {
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
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cart: {
            type: DataTypes.ARRAY(DataTypes.JSON)
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        token: {
            type: DataTypes.STRING,
        },
        confirm: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    { paranoid: true },
    { timestamps: false })

    User.beforeCreate(async (user) => {
        const saltRounds = 10; // Número de rounds de hashing (mayor es más seguro pero más lento)
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
      });
    
    User.beforeUpdate(async (user) => {
        if (user.changed('password')) {
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(user.password, saltRounds);
          user.password = hashedPassword;
        }
    });

    User.prototype.comparePassword = async function (password) {
        return await bcrypt.compare(password, this.password);
    };

    return User;
};
