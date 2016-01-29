'use strict';
const Immutable = require('immutable');
const fs = require('fs');
const express = require('express');
const bp = require('body-parser');
const Server = express();

let dataSet = Immutable.List([
    { first: 1 },
    "second",
    "third"
    ]);
Server.use(bp.json());
Server.use(bp.urlencoded({ extended: true }));
Server.use(express.static('dist'));

Server.use('/data', ( req, res ) => {
    res.json(dataSet);
});

Server.listen(3003, () => console.log("Server listening on port 3003"));
