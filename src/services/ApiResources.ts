class ApiResources{
    private URL_BASE;
    constructor(url_base:string){
        this.URL_BASE = url_base;
    }
    async getNamesRa():Promise<string[]|null>{
        let names:Promise<string[]>|null = null;
        const data = await fetch(`${this.URL_BASE}/personNames`);
        names = await data.json();
        return names;
    }
}
