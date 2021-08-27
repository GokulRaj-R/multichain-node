const express = require("express");
const router = express.Router();

const { rpcUser, rpcPass } = require("../config/config");
const mchain = require("multichain-node")({
    port: 7426,
    host: "127.0.0.1",
    user: rpcUser,
    pass: rpcPass,
});

router.post("/", (req, res) => {
    try {
        console.log(req.body);
        mchain.getInfo((err, result) => {
            if (err) console.log(err);
            res.send(result);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json("Interval Server Error");
    }
});

module.exports = router;
