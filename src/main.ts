import { GenericModel, IEntity } from "./contracts/GenericModel";
import { PersonBuider } from "./models/PersonModel";
import { BuyBuider } from "./models/BuyModel";




const person = new PersonBuider().setname("sandro").buid();

/*const buy = new BuyBuider();
buy.setDate("2023-01-22")
.buid()



console.log(JSON.stringify(buy));*/
console.log(JSON.stringify(person));



