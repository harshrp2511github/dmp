var express = require('express');
var router = express.Router();
var assert = require('assert');
var url = 'mongodb://admin:admin12345@ds149146.mlab.com:49146/dmp';
var MongoClient = require('mongodb').MongoClient;

    router.get('/gettop10', (req, res) => {
    MongoClient.connect(
        url,
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('dmp');

            db.collection('top10')
                .find()
                .toArray((err, result) => {
                    if (err) throw err;

                    res.status(201).json({
                        status: 'true',
                        results: result
                    });
                });

            client.close();
        }
    );
});

module.exports = router;