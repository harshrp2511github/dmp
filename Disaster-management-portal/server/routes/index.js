var express = require('express');
var router = express.Router();
var assert = require('assert');
var url = 'mongodb://admin:admin12345@ds149146.mlab.com:49146/dmp';
var MongoClient = require('mongodb').MongoClient;

    router.get('/getfirecount', (req, res) => {
    MongoClient.connect(
        url,
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('dmp');

            db.collection('FireCount')
                .find().sort({stuck: -1}).limit(10)
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


router.get('/getfiredata', (req, res) => {
    MongoClient.connect(
        url,
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('dmp');

            db.collection('FireData')
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

router.get('/getfoodcount', (req, res) => {
    MongoClient.connect(
        url,
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('dmp');

            db.collection('FoodCount')
                .find().sort({stuck: -1}).limit(10)
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


router.get('/getfooddata', (req, res) => {
    MongoClient.connect(
        url,
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('dmp');

            db.collection('FoodData')
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


router.get('/getmedicalcount', (req, res) => {
    MongoClient.connect(
        url,
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('dmp');

            db.collection('MedicalCount')
                .find().sort({stuck: -1}).limit(10)
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


router.get('/getmedicaldata', (req, res) => {
    MongoClient.connect(
        url,
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('dmp');

            db.collection('MedicalData')
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


router.get('/getsheltercount', (req, res) => {
    MongoClient.connect(
        url,
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('dmp');

            db.collection('ShelterCount')
                .find().sort({stuck: -1}).limit(10)
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


router.get('/getshelterdata', (req, res) => {
    MongoClient.connect(
        url,
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('dmp');

            db.collection('ShelterData')
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