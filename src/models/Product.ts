import { GenericModel, IEntity} from "../contracts/GenericModel";


class Product extends GenericModel{
    private productName:string|null = null;
    private sale:number|null = null;
    constructor(
        model:string,
        productName:string|null,
        sale:number|null
        )
    {
        super(model);
        this.productName = productName;
        this.sale = sale;
    }
    randomProduct():string{
        const listProducts = ["banana", "peixe", "home", "work table"];
        return listProducts[Math.floor(Math.random()*listProducts.length)]; 
    }
    randomSale():number{
        return Math.floor(Math.random()*100 + 10)
    }
    createData(): void {
        this.productName = this.randomProduct();
        this.sale = this.randomSale();
    }


}

export class ProductBuider{
    private _productName:string|null = null;
    private _sale:number|null = null;
    public product:Product;

    constructor(){
        this.reset();
    }
    buid(isRandon = false):Product{
        this.product = new Product(
            this.constructor.name,
            this._productName,
            this._sale
        );
        if(isRandon) this.product.createData();
        return this.product
    }
    reset(): this {
        this.product = new Product(
            this.constructor.name,
            null,
            null
        );
        return this;
    }

    setProductName(value:string):this{
        this._productName = value;
        return this
    }
    setSale(value:number):this{
        this._sale = value;
        return this
    }
    
}
