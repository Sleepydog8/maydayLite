"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SellerController_1 = require("../controllers/SellerController");
var sellerRouter = (0, express_1.Router)();
sellerRouter.get('/', SellerController_1.default.getSellers);
exports.default = sellerRouter;
