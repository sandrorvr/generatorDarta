import {v4 as uuidv4} from 'uuid';
import { ApiResources } from "../services/ApiResources";


export type TupleData = {[columnName:string]:string|number|null};
export type Row = {
    id: string,
    data:TupleData
}

export interface IEntity{
    model: string;
    relations:IEntity|null;
    size:number;
    setSize(value:number):this;
}

export abstract class GenericModel implements IEntity{
    private _relations: IEntity| null = null; 
    private _data:Row[];
    private _size:number;
    protected _model: string;
    protected resources:ApiResources;
    constructor(model: string){
        this._model = model;
        this._data = [];
        this._size = 10;
        this.resources = new ApiResources();

    }
    protected addRow(rowData:TupleData):void{
        const newRow:Row = {
            id: uuidv4(),
            data: rowData,
        };
        this._data.push(newRow);
    }

    get model():string{
        return this._model;
    }

    get relations():IEntity|null{
        return this._relations;
    }
    set relations(value:IEntity){
        this._relations = value;
    }
    get size():number{
        return this._size;
    }
    setSize(value:number):this{
        this._size = value;
        return this
    }
    async generateRandomData():Promise<Row[]>{
        await this.createData();
        return this._data;
    }
    protected abstract createData():Promise<void>;
}