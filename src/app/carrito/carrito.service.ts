import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Element, CarritoCompras } from './carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  clientName!:string;

  public totalCompra:number = 0;

  public carrito:Element[] = [{
    price:0,
    name:"void"
  }];

  constructor(
    private router:Router,
  ) { }

  getCarrito (){
    return [...this.carrito];
  }

  addToCarrito (price:any,name:any){
    console.log("CARRITO!");
    this.carrito.push ({
      price,
      name,
    });

    this.totalCompra = this.getTotalCarrito();
  }

  getTotalCarrito (){
    var tot = 0;
    this.carrito.forEach((element) => tot+element.price);
    return tot;
  }
}
