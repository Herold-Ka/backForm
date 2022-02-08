const express = require("express");
const { user } = require("../database/db");
const router = express.Router();
const db = require("../database/db");

router.post("/aide1", (req, res) => {
    db.aide.findOne({
            where: { email: req.body.email }
        })
        .then(aide => {
            if (!aide) {
                db.aide.create(req.body)
                    .then(validaide => {
                        res.status(200).json({
                            message: "user info",
                            email: validaide.email,
                            username: validaide.username,
                            userprenom: validaide.userprenom,
                            aide: validaide.aide,
                            revenus: validaide.revenus,
                            ville: validaide.ville,
                        });
                    })
                    .catch(err => {
                        res.json(err);
                    })
            } else {
                res.json("vous recevez déjà cette aide")
            }
        })
        .catch(err => {
            res.json(err);
        })
});

router.put("/update/:email", (req, res) => {
    db.aide.findOne({
            where: { email: req.params.email.email }
        })
        .then(aide => {
            if (aide) {
                user.update({
                        revenus: req.body.revenus,
                        montant: req.body.montant,
                        username: req.body.username,
                        userprenom: req.body.userprenom,
                        email: req.body.email,
                        aide: req.body.body,
                    })
                    .then(() => {
                        res.json({ message: "modifier" });
                    })
                    .catch(err => {
                        res.json(err);
                    })
            } else {
                res.json("utilisateur inconnu");
            }
        })
        .catch(err => {
            res.json(err);
        })
});
module.exports = router;