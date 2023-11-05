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

    protected async createData():Promise<void>{
        for(let i=0; i<this.size; i++){
            const newRow:TupleData = {
                "date": this.randomDate()
            }
            this.addRow(newRow);
        }
    }
}