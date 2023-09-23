import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async register ({email, password}:any ) {
    // -> createUserWithEmailAndPassword(this.auth, email, password); //esto sirve, pero lanza un error que no da info
    try { //Checkear si encontramos un usuario o un error
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  async login ( {email, password}:any ) {
    try { //Checkear si encontramos un usuario o un error
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  logout () {
    return signOut(this.auth);
  }
}
