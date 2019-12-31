const express = require('express');
const router = express.Router();

router.route('/collection')
    .get((req, res) => {
        let collection = require('../public/api/collection.json');
        res.json(collection);
    })
    .post((req, res) => {
        let body = '';

        // req.on('data', chunk => {
        //     body += chunk;
        // }).on('end', () => {
        //     const card = JSON.parse(body);
        //     collection.cards.push(card);
        //
        //     fs.writeFile('./public/api/collection.json', JSON.stringify(collection), 'utf8', () => {
        //         res.end('OK');
        //     });
        // });

        res.send();
    })
;

module.exports = router;
