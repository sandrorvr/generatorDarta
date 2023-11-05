import { IEntity } from "../contracts/GenericModel";

type TypeRelation = "0.0"|"1."|".1";
export interface IRelation{
    pkEntity:IEntity,
    fkEntity:IEntity,
    typeRelation:TypeRelation
}


export class GeneratorData{
    private _poolRelations: IRelation[];
    constructor(){
        this._poolRelations = [];
    }
    createRelation(pkEntity:IEntity, fkEntity:IEntity, typeRelation:TypeRelation){
        const relation = {pkEntity,fkEntity,typeRelation};
        this._poolRelations.push(relation);
    }
    
}