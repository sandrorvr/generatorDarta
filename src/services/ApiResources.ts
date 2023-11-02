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
