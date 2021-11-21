"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderQueries = void 0;
exports.orderQueries = {
    checkout: function (_a) {
        var CitizenId = _a.CitizenId, Brand = _a.Brand, Name = _a.Name, Category = _a.Category, Price = _a.Price;
        return "INSERT INTO Product (CitizenId, Brand, Name, Category, Price, ProductStatus ) VALUES\n        (".concat(CitizenId, ", ").concat(Brand, ", ").concat(Name, ", ").concat(Category, ", ").concat(Price, ", 'A')");
    },
};
