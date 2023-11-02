import { GenericModel, IModel } from "./contracts/GenericModel";
import { PersonBuider } from "./models/PersonModel";




const person = new PersonBuider();
person.setname("sandro").buid();
console.log(JSON.stringify(person));



