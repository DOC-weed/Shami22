import { Component, OnInit } from '@angular/core';
import {CarritoService} from "../carrito.service";
import {Producto} from "../producto/producto.js";
import {AngularFirestore} from "@angular/fire/firestore";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
ventas: any[];
total = 0;
prod = 0;
  constructor(private carser: CarritoService, private db: AngularFirestore, private AlertCtrl: AlertController) { }

  ngOnInit() {
  this.getcarrito();
  }
getcarrito() {
  this.db.collection('Ventas').snapshotChanges().subscribe(data => {
    this.ventas = data.map(e => {
      return {
        id: e.payload.doc.id,
        productos: e.payload.doc.data()
      };
    });
    for (const producto of this.ventas) {
          this.total = + producto.productos.Precio;
          this.prod = + producto.productos.Cantidad;

        }
    console.log(this.ventas);
  }
  ); }
  eliminarprod(id) {
    this.db.collection('Ventas').doc(id).delete();
    this.getcarrito();
  }
  async eliminartabla() {
    const alert = await this.AlertCtrl.create({
      message: 'Se borraran todos los productos del carrito, ¿Desea continuar?',
      buttons: [{
        text: 'Cancelar',
        role: 'Cancel',
        handler: blah => {
          console.log('confirm cancel: blah');
      }}, {
          text: 'Aceptar',
          handler: () => {
            this.db.collection('Ventas').doc().delete();
          }}]
    });
    alert.present();
  }
}

