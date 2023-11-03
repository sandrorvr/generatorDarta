import { GeneratorData, IPoolEntity } from "./services/GeneratorData";
import { PersonBuider } from "./models/PersonModel";
import { BuyBuider } from "./models/BuyModel";
import { ProductBuider } from "./models/Product";



const person = new PersonBuider().buid(true);
const buy = new BuyBuider().buid(true);
const product = new ProductBuider().buid(true);

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


const generateData = new GeneratorData();
generateData.poolEntity = pool;



console.log(generateData);