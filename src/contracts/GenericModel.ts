import { ApiResources } from "../services/ApiResources";

export interface IModel{
    
}

export abstract class GenericModel{
    protected model: string;
    protected resources:ApiResources; 
    constructor(model: string, url_base = "http://localhost:3000"){
        this.model = model;
        this.resources = new ApiResources(url_base);
    }
}