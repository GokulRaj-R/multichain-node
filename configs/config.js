require("dotenv").config();

const { RPCUSERNAME, RPCPASSWORD, RPCPORT } = process.env;

const config = {
    rpcUser: RPCUSERNAME,
    rpcPass: RPCPASSWORD,
    rpcPort: RPCPORT,
    rpcHost: process.env.RPCHOST || "127.0.0.1",
};

module.exports = config;
