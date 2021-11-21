"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishlistQueries = void 0;
exports.wishlistQueries = {
    getProductInWishlist: function (_a) {
        var Category = _a.Category;
        if (Category === 'ALL') {
            return "SELECT * FROM Product";
        }
        else {
            return "SELECT * FROM Product WHERE CATEGORY = ".concat(Category);
        }
    },
    addToWishlist: function (_a) {
        var CitizenId = _a.CitizenId, Brand = _a.Brand, Name = _a.Name, Category = _a.Category, Price = _a.Price;
        return "INSERT INTO Product (CitizenId, Brand, Name, Category, Price, ProductStatus ) VALUES\n      (".concat(CitizenId, ", ").concat(Brand, ", ").concat(Name, ", ").concat(Category, ", ").concat(Price, ", 'A')");
    },
    deleteWishlist: function (_a) {
        var CitizenId = _a.CitizenId, Brand = _a.Brand, Name = _a.Name, Category = _a.Category, Price = _a.Price;
        return "INSERT INTO Product (CitizenId, Brand, Name, Category, Price, ProductStatus ) VALUES\n      (".concat(CitizenId, ", ").concat(Brand, ", ").concat(Name, ", ").concat(Category, ", ").concat(Price, ", 'A')");
    },
};
