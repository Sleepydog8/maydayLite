"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductController_1 = require("../controllers/ProductController");
var routes = (0, express_1.Router)();
routes.get('/', ProductController_1.default.getProduct);
routes.post('/', ProductController_1.default.stockProduct);
exports.default = routes;
