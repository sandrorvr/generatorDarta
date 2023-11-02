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
    private poolEntity: IPoolEntity[] = [];
    constructor(){

    }
    addEntityInPool(entity:IEntity, relationships:IRelation[]):void{
        const relations:IPoolEntity = {entity, relationships};
        this.poolEntity.push(relations);
    }
    createRelation(entity:IEntity, typeRelation:string):IRelation{
        return {entity, typeRelation};
    }
}