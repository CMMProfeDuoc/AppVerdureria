import { Injectable } from '@angular/core';
import { Fruta } from '../frutas/frutas.model';
import { CarritoService } from '../carrito/carrito.service';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {

  public frutas:Fruta[] = [
    {
      id:'1',
      name:'manzana',
      color:'rojo',
      imageURL:'https://www.recetasnestle.com.mx/sites/default/files/inline-images/tipos-de-manzana-royal-gala.jpg',
      price:500
    },
    {
      id:'2',
      name:'platano',
      color:'amarillo',
      imageURL:'https://5aldia.cl/wp-content/uploads/2018/03/platano.jpg',
      price:600,
    },
    {
      id:'3',
      name:'platano  Premium',
      color:'amarillo',
      imageURL:'https://5aldia.cl/wp-content/uploads/2018/03/platano.jpg',
      price:600
    }
  ]

  constructor(private carritoService:CarritoService) { }

  getAllFrutas () {
    return [...this.frutas];
  }

  getFruta (frutaId:string) {
    return {
      ...this.frutas.find(fruta => {
        return fruta.id === frutaId;
      })
    };
  }

  newFruta (name:any, imageURL:any,price:any){
    this.frutas.push({
      name,
      imageURL,
      color:"none",
      id:this.frutas.length+1+"",
      price
    });
  }

  addToCarrito (name:any,price:any){
    this.carritoService.addToCarrito(price,name);
  }

}
