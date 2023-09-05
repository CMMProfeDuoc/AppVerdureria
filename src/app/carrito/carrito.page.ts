import { Component, OnInit } from '@angular/core';
import { CarritoService } from './carrito.service';
import { Element } from './carrito.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  public carrito!:Element[];

  constructor(
    private carritoService:CarritoService,
    private router:Router,
    ) { }

  ngOnInit() {
    this.carrito = this.carritoService.getCarrito();
  }

  goHome (){
    this.router.navigate(['/home'])
  }

  getTotal (){
    return this.carritoService.getTotalCarrito();
  }

  
}
