import { GenericModel, TupleData} from "../contracts/GenericModel";


export class Product extends GenericModel{
    private productName:string|null = null;
    private sale:number|null = null;
    constructor(){
        super("Product");
    }
    randomProduct():string{
        const listProducts = ["banana", "peixe", "home", "work table"];
        return listProducts[Math.floor(Math.random()*listProducts.length)]; 
    }
    randomSale():number{
        return Math.floor(Math.random()*100 + 10)
    }
    async createData():Promise<TupleData>{
        this.addColumnValue("procuct", this.randomProduct());
        this.addColumnValue("sale", this.randomSale());
        return new Promise<TupleData>((resolve, reject)=>{
            resolve(this.data);
            reject("DataNotLoad");
        })
    }
}
