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

    protected async createData():Promise<void>{
        for(let i=0; i<this.size; i++){
            const newRow:TupleData = {
                "procuct": this.randomProduct(),
                "sale": this.randomSale()
            }
            this.addRow(newRow);
        }
    }
}
