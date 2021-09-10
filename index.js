const express = require("express");
const publish = require("./apis/publish");
const stream = require("./apis/stream");

const app = express();
const PORT = process.env.MCBPORT || 3113;

app.use(express.json());

app.use("/publish", publish);
app.use("/stream", stream);

app.get("/", (req, res) => {
    res.send("Multichain node listening to stream data");
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});
