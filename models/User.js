module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "User", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nom: {
                type: Sequelize.DataTypes.STRING(45),
                AllowNull: false,
            },
            prenom: {
                type: Sequelize.DataTypes.STRING(45),
                AllowNull: false,
            },
            genre: {
                type: Sequelize.DataTypes.BOOLEAN,
                AllowNull: true,
            },
            email: {
                type: Sequelize.DataTypes.STRING(45),
                AllowNull: false,
                unique: true,
            },
            cp: {
                type: Sequelize.DataTypes.INTEGER,
                AllowNull: false,
            },
            revenus: {
                type: Sequelize.DataTypes.INTEGER,
                AllowNull: false,

            },
            ville: {
                type: Sequelize.DataTypes.STRING(20),
                AllowNull: false,
            }
        }, {
            timestamps: true,
            underscore: true,
        }
    );
}