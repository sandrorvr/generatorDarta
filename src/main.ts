import { GeneratorData, IPoolEntity } from "./services/GeneratorData";
import { Person } from "./models/PersonModel";
import { Buy } from "./models/BuyModel";
import { Product } from "./models/Product";


const person = new Person();
const buy = new Buy();
const product = new Product();


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
