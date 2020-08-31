const {DataTypes} = require("sequelize");

module.exports.initModel = async (sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        }
    });
    const Product = sequelize.define("product", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
        }
    });

    Product.belongsTo(User, {
        constraints: true,
        onDelete: "CASCADE"
    });
    User.hasMany(Product);

    await sequelize.sync(true);
    return {
        Product,
        User
    }
};