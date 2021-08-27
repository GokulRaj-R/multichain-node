const express = require("express");
const publish = require("./apis/publish");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/publish", publish);

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});
