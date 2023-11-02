import { GenericModel, IEntity } from "./contracts/GenericModel";
import { PersonBuider } from "./models/PersonModel";
import { BuyBuider } from "./models/BuyModel";




const person = new PersonBuider().buid(true);
const buy = new BuyBuider().buid(true);



console.log(JSON.stringify(buy));
console.log(JSON.stringify(person));



