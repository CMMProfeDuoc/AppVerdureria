import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito/carrito.service';
import { Verdura } from './verduras.model';

@Injectable({
  providedIn: 'root'
})
export class VerdurasService {
  verduras:Verdura[] = [
    {
      id:"1",
      name:"apio",
      precio:1000,
    },
    {
      id:"2",
      name:"beterraga",
      precio:600
    }
  ]

  constructor(
    private router:Router,
    private carritoService:CarritoService,
    ) { }

    getAllVerduras (){
      return [...this.verduras];
    }

    getVerdura (verduraId:string){
      return {
        ...this.verduras.find(verdura => {
          return verdura.id === verduraId;
        })
      };
    }

    newVerdura (name:any,precio:any){
      this.verduras.push({
        name,
        id:this.verduras.length+1+"",
        precio,
      });
    }

    addToCarrito (name:string){
      this.carritoService.escribirMensaje(name);
    }
}
