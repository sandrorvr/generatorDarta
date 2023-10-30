export interface IModel{
    printModel():string;
    generate():this;
}

export abstract class GenericModel{
    protected model: string;
    protected resources:ApiResources; 
    constructor(model: string){
        this.model = model;
        this.resources = new ApiResources();
    }
}