import { Component, OnInit } from '@angular/core';
import { VerdurasService } from '../verduras.service';
import { Router } from '@angular/router';
import { Verdura } from '../verduras.model'

@Component({
  selector: 'app-verduras-detail',
  templateUrl: './verduras-detail.page.html',
  styleUrls: ['./verduras-detail.page.scss'],
})
export class VerdurasDetailPage implements OnInit {

  verduras!:Verdura[];

  constructor(
    private verdurasService:VerdurasService,
    private router:Router

  ) { }

  ngOnInit() {
  }

}
