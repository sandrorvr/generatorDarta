import { IpersonNames } from "../contracts/IpersonNames";

export class ApiResources{
    private URL_BASE;
    constructor(url_base:string){
        this.URL_BASE = url_base;
    }
    async getNames():Promise<IpersonNames[]>{
        const data = await fetch(`${this.URL_BASE}/personNames`);
        const names:IpersonNames[] = await data.json();
        return names;
    }
}

//const api = new ApiResources("http://localhost:3000");
//const value = api.getNames();
//value.then((resolve)=>console.log(resolve.filter((obj)=>obj.id%2===0)));