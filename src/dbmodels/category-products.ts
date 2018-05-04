export class Category{
    id: number;
    name: string;

    constructor(cid:number, cname:string){
        this.id = cid;
        this.name = cname;
    }
}

export class Product{
    id: number;
    name: string;
    price: number;
    quantity: number;
    category: number;
    
    constructor(pid, pname, price, quantity, cat){
        this.id = pid;
        this.name = pname;
        this.price = price;
        this.quantity = quantity;
        this.category = cat;
    }
}