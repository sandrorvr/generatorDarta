import { GenericModel, IModel} from "../contracts/GenericModel";

export class Person extends GenericModel implements IModel{
    private cpf:number|null = null;
    private name:string|null = null;
    private middleName:string|null = null;
    private old:string|null = null;
    private country:string|null = null;
    private averageWage:string|null = null;
    constructor(
        model:string,
        cpf:number|null,
        name:string|null,
        middleName:string|null,
        old:string|null,
        country:string|null,
        averageWage:string|null,
        )
    {
        super(model);
        this.cpf = cpf;
        this.name = name;
        this.middleName = middleName;
        this.old = old;
        this.country = country;
        this.averageWage = averageWage;
    }

    randomCPF():number{
        const value_max = 99999999999;
        const value_min = 11111111111;
        return Math.floor(Math.random() * (value_max - value_min) + value_min);
    }
    randomName(listNames:Promise<string[]|null>):Promise<string[]|null>{
        return listNames;
    }
}
