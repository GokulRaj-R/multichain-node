const { RPCUSERNAME, RPCPASSWORD, RPCPORT, RPCHOST } = process.env;

const config = {
    rpcUser: RPCUSERNAME,
    rpcPass: RPCPASSWORD,
    rpcPort: RPCPORT,
    rpcHost: RPCHOST || "127.0.0.1",
};

module.exports = config;
