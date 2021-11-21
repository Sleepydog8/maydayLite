"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var WishlistController_1 = require("../controllers/WishlistController");
var routes = (0, express_1.Router)();
routes.get('/', WishlistController_1.default.getProductInWishlist);
routes.post('/', WishlistController_1.default.addToWishlist);
routes.delete('/', WishlistController_1.default.deleteWishlist);
exports.default = routes;
