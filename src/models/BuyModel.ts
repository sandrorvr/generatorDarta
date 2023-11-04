import { GenericModel, TupleData} from "../contracts/GenericModel";


export class Buy extends GenericModel{
    private date:string|null = null;
    constructor(){
        super("Buy")
    }
    randomDate():string{
        const day = Math.floor(Math.random() * 17 + 10);
        const moth = Math.floor(Math.random() * 8 + 1);
        const year = Math.floor(Math.random() * 5 + 10);
        return `20${year}-0${moth}-${day}`;
    }

    async createData():Promise<TupleData>{
        this.addColumnValue("date", this.randomDate());
        return new Promise<TupleData>((resolve, reject)=>{
            resolve(this.data);
            reject("DataNotLoad");
        })
    }
}