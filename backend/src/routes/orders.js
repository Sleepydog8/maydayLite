"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var OrderController_1 = require("../controllers/OrderController");
var routes = (0, express_1.Router)();
routes.put('/', OrderController_1.default.checkout);
exports.default = routes;
