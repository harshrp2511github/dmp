var express = require('express');
var router = express.Router();
var assert = require('assert');
//var url = 'mongodb://admin:admin12345@ds149146.mlab.com:49146/dmp';
var url = 'mongodb://ec2-18-191-49-56.us-east-2.compute.amazonaws.com:27017/test'
var MongoClient = require('mongodb').MongoClient;

    router.get('/getfirecount', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            if(err) throw err;
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('FireCount')
                .find().sort({_id: -1}).limit(1)
                .toArray((err, result) => {
                    if (err) throw err;
                    client.close();
                    res.status(201).json({
                        status: 'true',
                        results: result
                    });
                });

        }
    );
});


router.get('/getfiredata', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            if(err) throw err;
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('FireData')
                .find()
                .toArray((err, result) => {
                    if (err) throw err;
                    client.close();
                    res.status(201).json({
                        status: 'true',
                        results: result
                    });
                });

            
        }
    );
});

router.get('/getfoodcount', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            if(err) throw err;
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('FoodCount')
                .find().sort({_id: -1}).limit(1)
                .toArray((err, result) => {
                    if (err) throw err;
                    client.close();
                    res.status(201).json({
                        status: 'true',
                        results: result
                    });
                });
        }
    );
});


router.get('/getfooddata', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            if(err) throw err;
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('FoodData')
                .find()
                .toArray((err, result) => {
                    if (err) throw err;
                    client.close();
                    res.status(201).json({
                        status: 'true',
                        results: result
                    });
                });

        }
    );
});


router.get('/getmedicalcount', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            if(err) throw err;
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('MedicalCount')
                .find().sort({_id: -1}).limit(1)
                .toArray((err, result) => {
                    if (err) throw err;
                    client.close();
                    res.status(201).json({
                        status: 'true',
                        results: result
                    });
                });
        }
    );
});


router.get('/getmedicaldata', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            if(err) throw err;
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('MedicalData')
                .find()
                .toArray((err, result) => {
                    if (err) throw err;
                    client.close();
                    res.status(201).json({
                        status: 'true',
                        results: result
                    });
                });
        }
    );
});


router.get('/getsheltercount', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            if(err) throw err;
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('ShelterCount')
                .find().sort({_id: -1}).limit(1)
                .toArray((err, result) => {
                    if (err) throw err;
                    client.close();
                    res.status(201).json({
                        status: 'true',
                        results: result
                    });
                });

        }
    );
});


router.get('/getshelterdata', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            if(err) throw err;
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('ShelterData')
                .find()
                .toArray((err, result) => {
                    if (err) throw err;
                    client.close();
                    res.status(201).json({
                        status: 'true',
                        results: result
                    });
                });
        }
    );
});

router.get('/getallcount', (req, res) => {
    MongoClient.connect(
        url, { useNewUrlParser: true },
        (err, client) => {
            if(err) throw err;
            assert.equal(null, err);
            console.log('Connected successfully to server');

            const db = client.db('test');

            db.collection('AllCount')
                .find().sort({_id: -1}).limit(1)
                .toArray((err, result) => {
                    if (err) throw err;
                    client.close();
                    res.status(201).json({
                        status: 'true',
                        results: result
                    });
                });

        }
    );
});





module.exports = router;