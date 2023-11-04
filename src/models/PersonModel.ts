import { GenericModel, TupleData } from "../contracts/GenericModel";


export class Person extends GenericModel{
    constructor(){
        super("Person");
    }
    randomCPF():number{
        const value_max = 99999999999;
        const value_min = 11111111111;
        return Math.floor(Math.random() * (value_max - value_min) + value_min);
    }
    
    async randomName():Promise<string>{
        let listNames = await this.resources.getNames();
        const randomIndex = Math.floor(Math.random()*listNames.length);
        return listNames[randomIndex].name;
    }

    async createData():Promise<TupleData>{
        const randomName = await this.randomName();
        this.addColumnValue("cpf", this.randomCPF());
        this.addColumnValue("name", randomName);
        return new Promise<TupleData>((resolve, reject)=>{
            resolve(this.data);
            reject("DataNotLoad");
        })
    }
}
