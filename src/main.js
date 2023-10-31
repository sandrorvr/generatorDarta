"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonModel_1 = require("./models/PersonModel");
var GeneratorData = /** @class */ (function () {
    function GeneratorData(agente, action) {
        this._agent = agente;
        this._action = action;
    }
    Object.defineProperty(GeneratorData.prototype, "agent", {
        get: function () {
            return this._agent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeneratorData.prototype, "action", {
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    return GeneratorData;
}());
var person = new PersonModel_1.PersonBuider();
person.setname("sandro").buid();
console.log(JSON.stringify(person));
//const gerador = new GeneratorData(new Person("sandro", 10000000000), new ActionBuy("compra"));
//gerador.run();
