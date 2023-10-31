import { GenericModel, IModel} from "../contracts/GenericModel";
import { IpersonNames } from "../contracts/IpersonNames";


interface IPerson{
    reset():this;
    setcpf(value:number):this;
    setname(value:string):this;
    setmiddleName(value:string):this;
    setold(value:number):this;
    setcountry(value:string):this;
    setaverageWage(value:number):this;
}

class Person extends GenericModel{
    private cpf:number|null = null;
    private name:string|null = null;
    private middleName:string|null = null;
    private old:number|null = null;
    private country:string|null = null;
    private averageWage:number|null = null;
    constructor(
        model:string,
        cpf:number|null,
        name:string|null,
        middleName:string|null,
        old:number|null,
        country:string|null,
        averageWage:number|null,
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
    async randomName():Promise<void>{
        let listNames = await this.resources.getNames();
        const randomIndex = Math.floor(Math.random()*listNames.length);
        this.name = listNames[randomIndex].name;
    }
}

export class PersonBuider implements IPerson{
    private cpf:number|null = null;
    private name:string|null = null;
    private middleName:string|null = null;
    private old:number|null = null;
    private country:string|null = null;
    private averageWage:number|null = null;
    public person:Person;

    constructor(){
        this.reset();
    }
    buid():Person{
        return this.person;
    }
    reset(): this {
        this.person = new Person(
            this.constructor.name,
            this.cpf,
            this.name,
            this.middleName,
            this.old,
            this.country,
            this.averageWage
        );
        return this;
    }
    setcpf(value:number): this {
        this.cpf = value;
        return this;
    }
    setname(value:string): this {
        this.name = value;
        return this;
    }
    setmiddleName(value:string): this {
        this.middleName = value;
        return this;
    }
    setold(value:number): this {
        this.old = value;
        return this;
    }
    setcountry(value:string): this {
        this.country = value;
        return this;
    }
    setaverageWage(value:number): this {
        this.averageWage = value;
        return this;
    }
}
