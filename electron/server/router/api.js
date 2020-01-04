const express = require('express');
const router = express.Router();
const fileSystem = require('fs');

router.route('/collection')
    .get((req, res) => {
        const collection = require('../../public/api/collection.json');
        res.json(collection);
    })
    .post((req, res) => {
        const card = req.body;
        const collection = require('../../public/api/collection.json');
        collection.cards.push(card);

        fileSystem.writeFile('./public/api/collection.json', JSON.stringify(collection), 'utf8', () => {
            res.send();
        });
    })
;

module.exports = router;
