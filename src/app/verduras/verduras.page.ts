import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.page.html',
  styleUrls: ['./verduras.page.scss'],
})
export class VerdurasPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goHome (){
    this.router.navigate(['/home'])
  }
}
