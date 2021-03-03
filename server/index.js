const express = require("express");
const path = require("path");

const port = 3000;

const frontEnd = path.join(__dirname, "..", "client", "dist");

const app = express();

app.use(express.static(frontEnd));

app.listen(port, () => console.info(`http://localhost:${port}`));
