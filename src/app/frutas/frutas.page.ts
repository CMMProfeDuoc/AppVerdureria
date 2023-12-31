import { Component, OnInit } from '@angular/core';
import { Fruta } from './frutas.model';
import { FrutasService } from './frutas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {
  frutas!:Fruta[];

  constructor(private frutasService:FrutasService, private router:Router) { }

  ngOnInit() {
    this.frutas = this.frutasService.getAllFrutas();
  }

  addNewFruta (){
    this.router.navigate(['/frutas/new-fruta']);
  }

  goHome (){
    this.router.navigate(['/home']);
  }

  addToCarrito (name:any,price:any){
    this.frutasService.addToCarrito(name,price);
  }

}
