'use strict';
const fs = require('fs');
const express = require('express');
const bp = require('body-parser');
const path = require('path');
const Server = express();

Server.use(bp.json());
Server.use(bp.urlencoded({ extended: true }));
Server.use(express.static('dist'));

Server.use('/data', ( req, res ) => {
    res.json(dataSet);
});
Server.use('/js/app.js', ( req, res ) => {
    res.sendFile(path.join(__dirname, 'dist/js/app.js'));
});
Server.use('/css/styles.js', ( req, res ) => {
    res.sendFile(path.join(__dirname, 'dist/css/styles.css'));
});
Server.use('*', ( req, res ) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
Server.listen(3003, () => console.log("Server listening on port 3003"));
