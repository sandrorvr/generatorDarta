import { GenericModel, IModel} from "../contracts/GenericModel";

export class Person extends GenericModel implements IModel{
    private cpf:number|null = null;
    private name:string|null = null;
    constructor(model:string){
        super(model);
    }
    printModel():string{
        return this.model;
    }
    randomCPF():number{
        const value_max = 99999999999;
        const value_min = 11111111111;
        return Math.floor(Math.random() * (value_max - value_min) + value_min);
    }
    randomName(listNames:Promise<string[]|null>):Promise<string[]|null>{
        return listNames;
    }
    generate(): this {
        this.cpf = this.randomCPF();
        return this;
    }
}
