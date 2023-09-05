import { Component, OnInit } from '@angular/core';
import { FrutasService } from '../frutas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruta } from  '../frutas.model';

@Component({
  selector: 'app-frutas-detail',
  templateUrl: './frutas-detail.page.html',
  styleUrls: ['./frutas-detail.page.scss'],
})
export class FrutasDetailPage implements OnInit {
  fruta!: Fruta;  

  constructor(private frutasService:FrutasService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const fId = paramMap.get("frutaId");
      this.fruta = this.frutasService.getFruta(fId as string) as Fruta;
      console.log(this.fruta);
    })
  }

  goFrutas (){
    this.router.navigate(['/frutas']);
  }

}
