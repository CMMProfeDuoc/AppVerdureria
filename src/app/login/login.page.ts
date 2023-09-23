import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials !: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private authService : AuthService,
    private loadingController : LoadingController,
    private alertController : AlertController,

  ) { }

  //2 Acceso rapido a los datos para el formulario reactivo
  get email() {
    return this.credentials.get('email');
  }

  get password ()
  {
    return this.credentials.get('password');
  }

  //1 Validaciones de datos 
  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(4)]]
    })
  }

  //3 Crear funciones
  async register () {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();

    if (user){ //en caso de tener exito, ir a home y reemplazar el historial
      this.router.navigateByUrl('/home',{replaceUrl: true});
    }else{
      //show alert
    }
  }

  async login () {}

  //Crear esto al ultimo, cuando sea necesario usar (?)
  async showAlert (header:any, message:any) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
