import { GenericModel, IEntity} from "../contracts/GenericModel";


class Person extends GenericModel{
    private cpf:number|null;
    private name:string|null;
    constructor(
        model:string,
        cpf:number|null,
        name:string|null
        )
    {
        super(model);
        this.cpf = cpf;
        this.name = name;
    }


    private randomCPF():number{
        const value_max = 99999999999;
        const value_min = 11111111111;
        return Math.floor(Math.random() * (value_max - value_min) + value_min);
    }
    private async randomName():Promise<string>{
        let listNames = await this.resources.getNames();
        const randomIndex = Math.floor(Math.random()*listNames.length);
        return this.name = listNames[randomIndex].name;
    }

    async createData():Promise<void>{
        this.cpf = this.randomCPF();
        this.name = await this.randomName();
    }
}

export class PersonBuider{
    private cpf:number|null;
    private name:string|null;
    public person:Person;

    constructor(){
        this.reset();
    }
    buid(isRandon = false):Person{
        this.person = new Person(
            this.constructor.name,
            this.cpf,
            this.name
        );
        if(isRandon) this.person.createData();
        return this.person
    }
    reset(){
        this.person = new Person(
            this.constructor.name,
            null,
            null
        );
    }
    setcpf(value:number): this {
        this.cpf = value;
        return this;
    }
    setname(value:string): this {
        this.name = value;
        return this;
    }
}
