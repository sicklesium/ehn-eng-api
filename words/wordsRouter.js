const express = require('express')
const db = require('./wordsModal.js')

const router = express.Router();

// GET request for all words
router.get("/", (req, res) => {
    db.getAll()
        .then(words => {
            res.json(words);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error retrieving the dictionary.", err })
        })
})

// GET request for specific word
router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.getById(id)
        .then(word => {
            if (word) {
                res.status(200).json(word)
            } else {
                res.status(404).json({ errorMessage: "That ID doesn't exist." })
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error retrieving the word.", err })
        })
})

module.exports = router;