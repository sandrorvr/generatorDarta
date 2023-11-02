import { GenericModel, IEntity} from "../contracts/GenericModel";


class Buy extends GenericModel{
    private date:string|null = null;
    constructor(
        model:string,
        date:string|null
        )
    {
        super(model);
        this.date = date;
    }
    randomDate():string{
        const day = Math.floor(Math.random() * 17 + 10);
        const moth = Math.floor(Math.random() * 8 + 1);
        const year = Math.floor(Math.random() * 5 + 10);
        return `20${year}-0${moth}-${day}`;
    }
    createData(): void {
        this.date = this.randomDate();
    }


}

export class BuyBuider{
    private _date:string|null = null;
    public buy:Buy;

    constructor(){
        this.reset();
    }
    buid():Buy{
        return this.buy;
    }
    reset(): this {
        this.buy = new Buy(
            this.constructor.name,
            this._date
        );
        return this;
    }

    setDate(value:string):this{
        this._date = value;
        return this
    }
    
}
