module.exports = (dbinfo, Sequelize) => {
    return dbinfo.define(
        "Aide", {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            revenus: {
                type: Sequelize.DataTypes.INTEGER,
                AllowNull: false,
            },
            montant: {
                type: Sequelize.DataTypes.STRING("20"),
                AllowNull: false,
            },
            username: {
                type: Sequelize.DataTypes.STRING("40"),
                AllowNull: false,
            },
            userprenom: {
                type: Sequelize.DataTypes.STRING("40"),
                AllowNull: false,
            },
            email: {
                type: Sequelize.DataTypes.STRING("40"),
                AllowNull: false,
            },
            aide: {
                type: Sequelize.DataTypes.STRING("20"),
                AllowNull: false,
            },
        }, {
            timestamps: true,
            underscore: true,
        },
    );
}