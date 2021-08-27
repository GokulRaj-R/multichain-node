require("dotenv").config();

const { RPCUSERNAME, RPCPASSWORD } = process.env;

const config = {
    rpcUser: RPCUSERNAME,
    rpcPass: RPCPASSWORD,
};

module.exports = config;
