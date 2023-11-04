import { GenericModel, TupleData } from "../contracts/GenericModel";


export class Person extends GenericModel{
    constructor(){
        super("Person");
    }
    private randomCPF():number{
        const value_max = 99999999999;
        const value_min = 11111111111;
        return Math.floor(Math.random() * (value_max - value_min) + value_min);
    }
    
    private async randomName():Promise<string>{
        let listNames = await this.resources.getNames();
        const randomIndex = Math.floor(Math.random()*listNames.length);
        return listNames[randomIndex].name;
    }

    protected async createData():Promise<void>{
        const randomName = await this.randomName();
        this.addColumnValue("cpf", this.randomCPF());
        this.addColumnValue("name", randomName);
    }
}
