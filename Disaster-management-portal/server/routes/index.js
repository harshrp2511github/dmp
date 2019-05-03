var express = require('express');
var router = express.Router();
var assert = require('assert');
//var url = 'mongodb://admin:admin12345@ds149146.mlab.com:49146/dmp';
var url = 'mongodb://ec2-18-220-183-234.us-east-2.compute.amazonaws.com:27017/test'
var MongoClient = require('mongodb').MongoClient;

    router.get('/getfirecount', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('FireCount')
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


router.get('/getfiredata', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

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
        url, { useNewUrlParser: true },
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('FoodCount')
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


router.get('/getfooddata', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

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
        url, { useNewUrlParser: true },
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('MedicalCount')
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


router.get('/getmedicaldata', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

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
        url, { useNewUrlParser: true },
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('ShelterCount')
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


router.get('/getshelterdata', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

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

router.get('/getallcount', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('AllCount')
                .find().sort({_id: -1}).limit(1)
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