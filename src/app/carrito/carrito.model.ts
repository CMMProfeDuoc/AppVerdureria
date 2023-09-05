export interface Element {
    price:number,
    name:string,
}

export interface CarritoCompras {
    total:number,
    elements:Element[],
    elementCount:number,
}