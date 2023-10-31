"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericModel = void 0;
var ApiResources_1 = require("../services/ApiResources");
var GenericModel = /** @class */ (function () {
    function GenericModel(model, url_base) {
        if (url_base === void 0) { url_base = "http://localhost:3000"; }
        this.model = model;
        this.resources = new ApiResources_1.ApiResources(url_base);
    }
    return GenericModel;
}());
exports.GenericModel = GenericModel;
