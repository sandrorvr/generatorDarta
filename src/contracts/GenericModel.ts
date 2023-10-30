export interface IModel{
    printModel():string;
    generate():this;
}

export abstract class GenericModel{
    protected model: string;
    constructor(model: string){
        this.model = model;
    }
}