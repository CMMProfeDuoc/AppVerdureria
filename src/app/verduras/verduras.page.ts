import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Verdura } from './verduras.model'
import { VerdurasService } from './verduras.service';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.page.html',
  styleUrls: ['./verduras.page.scss'],
})
export class VerdurasPage implements OnInit {

  verduras!:Verdura[];

  constructor(
    private router:Router,
    private verdurasService:VerdurasService,
    ) { }

  ngOnInit() {
    this.verduras = this.verdurasService.getAllVerduras();
  }

  goHome (){
    this.router.navigate(['/home'])
  }

  agregarACarrito (name:any){
    this.verdurasService.addToCarrito(name);
  }
}
