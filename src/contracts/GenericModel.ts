import {v4 as uuidv4} from 'uuid';
import { ApiResources } from "../services/ApiResources";


export type TupleData = {[columnName:string]:string|number|null};

export interface IEntity{
    id:string;
    relations:IEntity|null;

}

export abstract class GenericModel implements IEntity{
    private _id:string;
    private _relations: IEntity| null = null; 
    private _data:TupleData;
    private _isRandom:boolean;
    protected model: string;
    protected resources:ApiResources;
    constructor(model: string){
        this.model = model;
        this._id = uuidv4();
        this._data = {};
        this._isRandom = true;
        this.resources = new ApiResources();

    }
    addColumnValue(columnName:string, valueNull:string|number|null):void{
        this._data[columnName] = valueNull;
    }
    print(){
        console.log(this._data)
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
    async generateRandomData(){
        return this.createData().then(()=> this._data)
    }
    protected abstract createData():Promise<void>;
}