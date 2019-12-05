import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
usuAdmin = '';
passAdmin = '';
usuClient = '';
passClient = '';

  constructor(private NavC: NavController, private Auth: AngularFireAuth, private AlertCtrl: AlertController) { }

  ngOnInit() {
  }
 inicioAdmin(email, pass) {
      this.Auth.auth.signInWithEmailAndPassword(email, pass).then(res => {
          this.usuAdmin = '';
          this.passAdmin = '';
          this.NavC.navigateForward('tabs/tab1');
      }).catch( res => {
          this.datosincorrectos();
      });


 }
 inicioCliente(email, pass) {
     this.Auth.auth.signInWithEmailAndPassword(email, pass).then(res => {
         this.usuClient = '';
         this.passClient = '';
         this.NavC.navigateForward('sales');
     }).catch( res => {
         this.datosincorrectos();
     });
 }
 async datosincorrectos() {
      const alert = await this.AlertCtrl.create({
          message: 'Datos incorrectos, ingrese nuevos datos',
      });
      alert.present();
 }
}
