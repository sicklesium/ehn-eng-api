const express = require('express');
const server = express();

const cors = require("cors")
const helmet = require("helmet")

const wordsRouter = require("../words/wordsRouter.js");

server.use(express.json());

server.use(cors())
server.use(helmet())

server.use("/api/words", wordsRouter)

server.get("/", (req, res) => {
    res.send(`<h2>Do we have lift off?</h2>`);
})

module.exports = server;