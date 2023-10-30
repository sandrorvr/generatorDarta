"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const GenericModel_1 = require("../contracts/GenericModel");
class Person extends GenericModel_1.GenericModel {
    constructor(model, cpf = null) {
        super(model);
        this.cpf = null;
        this.cpf = cpf;
    }
    printModel() {
        return this.model;
    }
}
exports.Person = Person;
