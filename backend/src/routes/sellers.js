"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SellerController_1 = require("../controllers/SellerController");
var routes = (0, express_1.Router)();
routes.get('/', SellerController_1.default.getSellers);
exports.default = routes;
