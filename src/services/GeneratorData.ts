import { IEntity } from "../contracts/GenericModel";

export interface IRelation{
    entity:IEntity,
    typeRelation:string
}

export interface IPoolEntity{
    entity:IEntity,
    relationships:IRelation[]
}

export class GeneratorData{
    private _poolEntity: IPoolEntity[];
    constructor(){
        this._poolEntity = [];
    }
    set poolEntity(value:IPoolEntity[]){
        this._poolEntity = value;
    }
}