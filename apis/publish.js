const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const { rpcUser, rpcPass, rpcPort, rpcHost } = require("../configs/config");
const mchain = require("multichain-node")({
    port: rpcPort,
    host: rpcHost,
    user: rpcUser,
    pass: rpcPass,
});

router.post(
    "/",
    body("stream", "Stream is required").notEmpty(),
    body("key", "Key is required").notEmpty(),
    // Data is required and must be a JSON object
    body("data", "Data is required")
        .notEmpty()
        .custom((obj) => {
            if (typeof obj !== "object" || Array.isArray(obj)) {
                throw new Error("Data must be a JSON object");
            }
            return true;
        }),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const { stream, key, data } = req.body;
        try {
            mchain.publish(
                { stream: stream, key: key, data: { json: data } },
                (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(400).json(err);
                    }
                    return res.json(result);
                }
            );
        } catch (err) {
            console.log(err);
            return res.status(500).json("Interval Server Error");
        }
    }
);

module.exports = router;
