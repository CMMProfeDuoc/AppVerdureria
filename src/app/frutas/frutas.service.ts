import { Injectable } from '@angular/core';
import { Fruta } from '../frutas/frutas.model';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {

  public frutas:Fruta[] = [
    {
      id:'1',
      name:'manzana',
      color:'rojo',
      imageURL:'https://www.recetasnestle.com.mx/sites/default/files/inline-images/tipos-de-manzana-royal-gala.jpg'
    },
    {
      id:'2',
      name:'platano',
      color:'amarillo',
      imageURL:'https://5aldia.cl/wp-content/uploads/2018/03/platano.jpg'
    },
    {
      id:'3',
      name:'platano  Premium',
      color:'amarillo',
      imageURL:'https://5aldia.cl/wp-content/uploads/2018/03/platano.jpg'
    }
  ]

  constructor() { }

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

  newFruta (name:any, imageURL:any){
    this.frutas.push({
      name,
      imageURL,
      color:"none",
      id:this.frutas.length+1+""
    });
  }

}
