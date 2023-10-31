import { GenericModel, IModel } from "./contracts/GenericModel";
import { GenericAction, IAction } from "./contracts/GenericAtion";

import { PersonBuider } from "./models/PersonModel";
import { ActionBuy } from "./services/ActionBuy";


class GeneratorData{
    private _agent:IModel;
    private _action:IAction;
    constructor(agente: IModel, action: IAction){
        this._agent = agente;
        this._action = action;
    }
    get agent():IModel{ 
        return this._agent;
    }
    get action():IAction{
        return this._action;
    }
}

const person = new PersonBuider();
person.setname("sandro").buid();
console.log(JSON.stringify(person));
//const gerador = new GeneratorData(new Person("sandro", 10000000000), new ActionBuy("compra"));
//gerador.run();

//vosed39177@zamaneta.com


