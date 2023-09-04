import { Component, OnInit } from '@angular/core';
import { FrutasService } from '../frutas.service';
import { Fruta } from '../frutas.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fruta',
  templateUrl: './add-fruta.page.html',
  styleUrls: ['./add-fruta.page.scss'],
})
export class AddFrutaPage implements OnInit {

  constructor(private frutasService:FrutasService, private router:Router) { }

  ngOnInit() {
  }

  saveNewFruta (name:any,imageURL:any){
    this.frutasService.newFruta(name,imageURL);
  }

  goHome (){
    this.router.navigate(['/home']);
  }

}
