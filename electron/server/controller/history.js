const express = require('express');
const router = express.Router();
const fileSystem = require('fs');

router.route('/history')
    .get((req, res) => {
        const history = require('../../public/api/history.json');
        res.json(history);
    })
    // .post((req, res) => {
    //     const card = req.body;
    //     const collection = require('../../public/api/collection.json');
    //     collection.cards.push(card);
    //
    //     fileSystem.writeFile('./public/api/collection.json', JSON.stringify(collection), 'utf8', () => {
    //         res.send();
    //     });
    // })
;

module.exports = router;
