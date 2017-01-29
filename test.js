'use strict';

var express = require('express');

var server = express();

server.use(express.static(__dirname));

server.listen(process.env.PORT || 8080);
console.log("Local Host Started");
