import { GeneratorData} from "./services/GeneratorData";
import { Person } from "./models/PersonModel";
import { Buy } from "./models/BuyModel";
import { Product } from "./models/Product";


const person = new Person();
const buy = new Buy();
const product = new Product();

async function main(){
    const personData = await person.generateRandomData()
    const buyData = await buy.setSize(5).generateRandomData()
    const productData = await product.setSize(3).generateRandomData()

    console.log(personData);
}

main();

//vosed39177@zamaneta.com