const express = require("express");
const router = express.Router();
const db = require("../database/db");

router.post("/info", (req, res) => {
    db.user.findOne({
            where: { email: req.body.email }
        })
        .then(user => {
            if (!user) {
                db.user.create(req.body)
                    .then(validuser => {
                        res.status(200).json({
                            message: "user info",
                            email: validuser.email,
                            nom: validuser.nom,
                            prenom: validuser.prenom,
                            genre: validuser.genre,
                            revenus: validuser.revenus,
                            ville: validuser.ville,
                            cp: validuser.cp,
                        });
                    })
                    .catch(err => {
                        res.json(err);
                    })
            } else {
                res.json("cette adresse mail est déjà utilisé")
            }
        })
        .catch(err => {
            res.json(err);
        })
});
router.get("/findById/:id", (req, res) => {
    db.user.findOne({
            where: { id: req.params.id, },
        })
        .then((users) => {
            res.json({ users: users });
        })
        .catch((err) => {
            res.json(err);
        });
});
router.get("/findByEmail/:email", (req, res) => {
    db.user.findOne({
            where: { email: req.params.email, },
        })
        .then((users) => {
            res.json({ users: users });
        })
        .catch((err) => {
            res.json(err);
        });
});


module.exports = router;