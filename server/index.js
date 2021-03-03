const express = require("express");
const path = require("path");

const port = 3000;
// path to the front end portion
const frontEnd = path.join(__dirname, "..", "client", "dist");
//creating server
const app = express();
// sending frontend to server to host
app.use(express.static(frontEnd));
// hosting at port
app.listen(port, () => console.info(`http://localhost:${port}`));
