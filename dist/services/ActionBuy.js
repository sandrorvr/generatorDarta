"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionBuy = void 0;
const GenericAtion_1 = require("../contracts/GenericAtion");
class ActionBuy extends GenericAtion_1.GenericAction {
    printAction() {
        return this.action;
    }
}
exports.ActionBuy = ActionBuy;
