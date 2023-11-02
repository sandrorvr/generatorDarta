import { GeneratorData} from "./services/GeneratorData";
import { PersonBuider } from "./models/PersonModel";
import { BuyBuider } from "./models/BuyModel";
import { ProductBuider } from "./models/Product";



const person = new PersonBuider().buid(true);
const buy = new BuyBuider().buid(true);
const product = new ProductBuider().buid(true);

const generateData = new GeneratorData();
generateData.addEntityInPool(
    person,
    [
        generateData.createRelation(buy,"1."),
        generateData.createRelation(product,".")
    ]
);



console.log(generateData);