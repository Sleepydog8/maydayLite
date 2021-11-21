"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var inCarts_1 = require("./inCarts");
var orders_1 = require("./orders");
var products_1 = require("./products");
var sellers_1 = require("./sellers");
var wishlists_1 = require("./wishlists");
var app = (0, express_1.Router)();
app.use('/inCarts', inCarts_1.default);
app.use('/orders', orders_1.default);
app.use('/products', products_1.default);
app.use('/sellers', sellers_1.default);
app.use('/wishlists', wishlists_1.default);
exports.default = app;
