import { GeneratorData, IPoolEntity } from "./services/GeneratorData";
import { Person } from "./models/PersonModel";
import { BuyBuider } from "./models/BuyModel";
import { ProductBuider } from "./models/Product";



/*
const pool:IPoolEntity[] = [
    {
        entity:person,
        relationships:[
            {
                entity: buy,
                typeRelation:"1."
            }
        ]
    },
    {
        entity:buy,
        relationships:[
            {
                entity: product,
                typeRelation:"1."
            }
        ]
    }
]

*/
const p = new Person();
p.createData().then((resolve)=> console.log(resolve));