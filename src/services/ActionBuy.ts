import { GenericAction, IAction } from "../contracts/GenericAtion";

export class ActionBuy extends GenericAction implements IAction{
    printAction():string{
        return this.action;
    }
}