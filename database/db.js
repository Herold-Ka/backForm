const Sequelize = require("sequelize"),

    dotenv = require("dotenv");
dotenv.config();

const db = {};

const dbinfo = new Sequelize(
    process.env.NOM_BSD,
    process.env.IDENTIFIANT_BSD,
    process.env.MDP_BSD, {
        host: process.env.HOST_BSD,
        dialect: "mysql",
        port: process.env.PORT_BSD,
        pool: {
            max: 5,
            min: 0,
        },
    }
);

dbinfo.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });


db.user = require("../models/User")(dbinfo, Sequelize);
db.aide = require("../models/Aide")(dbinfo, Sequelize);
db.dbinfo = dbinfo;
db.Sequelize = Sequelize;

//dbinfo.sync({ force: true });

module.exports = db;