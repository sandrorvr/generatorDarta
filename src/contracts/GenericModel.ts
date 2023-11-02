import {v4 as uuidv4} from 'uuid';
import { ApiResources } from "../services/ApiResources";


export interface IEntity{
    id:string;
    relations:IEntity|null;
    createData():void;

}

export abstract class GenericModel implements IEntity{
    private _id:string;
    private _relations: IEntity| null = null; 
    protected model: string;
    protected resources:ApiResources;
    constructor(model: string){
        this._id = uuidv4();
        this.model = model;
        this.resources = new ApiResources();
    }
    get id(){
        return this._id;
    }
    get relations():IEntity|null{
        return this._relations;
    }
    set relations(value:IEntity){
        this._relations = value;
    }
    abstract createData(): void;
    
}