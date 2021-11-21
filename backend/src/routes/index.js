"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sellers_1 = require("./sellers");
var defaultRouter = (0, express_1.Router)();
console.log('yay');
defaultRouter.use('/sellers', sellers_1.default);
exports.default = defaultRouter;
