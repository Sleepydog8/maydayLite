"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var typeorm_1 = require("typeorm");
var routes_1 = require("./routes");
(0, typeorm_1.createConnection)().then(function (connection) {
    var manager = new typeorm_1.EntityManager(connection);
    var app = express();
    app.use(express.json());
    app.use('/', routes_1.default);
    // start express server
    app.listen(3001);
    console.log('server start on 3001');
});
