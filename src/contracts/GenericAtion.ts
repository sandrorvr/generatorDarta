export interface IAction{
    printAction():string;
}

export abstract class GenericAction{
    protected action:string;
    constructor(action:string){
        this.action = action
    }
}