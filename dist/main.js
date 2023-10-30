"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonModel_1 = require("./models/PersonModel");
const ActionBuy_1 = require("./services/ActionBuy");
class GeneratorData {
    constructor(agente, action) {
        this._agent = agente;
        this._action = action;
    }
    get agent() {
        return this._agent;
    }
    get action() {
        return this._action;
    }
    run() {
        console.log(`A acao 'e: ${this._action.printAction()}`);
        console.log(`O Agente 'e: ${this._agent.printModel()}`);
    }
}
const gerador = new GeneratorData(new PersonModel_1.Person("sandro", 10000000000), new ActionBuy_1.ActionBuy("compra"));
gerador.run();
