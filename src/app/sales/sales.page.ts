import { Component, OnInit } from '@angular/core';
import {GlobalPage} from "../global/global.page";
import {ProfilePage} from "../profile/profile.page";
import {SubsidiaryPage} from "../subsidiary/subsidiary.page";
import {AlertController, ModalController, PopoverController} from "@ionic/angular";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {CarritoService} from "../carrito.service";
import  {CarPage} from "../car/car.page";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  comida: any[];
  ropa: any[];
  electric: any[];
  pape: any[];
  searchcomida= '';
  searchropa='';
  searchelectric='';
  searchpape='';
  cantidad = 0;
  cant=0;
  constructor(private ModCtrl: ModalController, private db: AngularFirestore, private storage: AngularFireStorage,
              private PoptCtrl: PopoverController, private carservice: CarritoService) { }

  ngOnInit() {
    this.showComida();
    this.showElectric();
    this.showPape();
    this.showRopa();
  }
  showComida() {
    this.db.collection('Comida').snapshotChanges().subscribe(data => {
      this.comida = data.map(e => {
        return {
          id: e.payload.doc.id,
          productos: e.payload.doc.data()
        };
      });
      console.log(this.comida);
      for (const producto of this.comida) {
        console.log(producto.productos.Url);
        this.storage.ref(producto.productos.Url).getDownloadURL().toPromise().then((url) => {
          producto.productos.Url2 = url;
        }).catch((error) => {
          console.log('khaaaa!!!', error);
        });
      }
    });
  }
  showRopa() {
    this.db.collection('Ropa').snapshotChanges().subscribe(data => {
      this.ropa = data.map(e => {
        return {
          id: e.payload.doc.id,
          productos: e.payload.doc.data()
        };
      });
      console.log(this.ropa);
      for (const producto of this.ropa) {
        console.log(producto.productos.Url);
        this.storage.ref(producto.productos.Url).getDownloadURL().toPromise().then((url) => {
          producto.productos.Url2 = url;
        }).catch((error) => {
          console.log('khaaaa!!!', error);
        });
      }
    });
  }
  showElectric() {
    this.db.collection('Electronicos').snapshotChanges().subscribe(data => {
      this.electric = data.map(e => {
        return {
          id: e.payload.doc.id,
          productos: e.payload.doc.data()
        };
      });
      console.log(this.electric);
      for (const producto of this.electric) {
        console.log(producto.productos.Url);
        this.storage.ref(producto.productos.Url).getDownloadURL().toPromise().then((url) => {
          producto.productos.Url2 = url;
        }).catch((error) => {
          console.log('khaaaa!!!', error);
        });
      }
    });
  }
  showPape() {
    this.db.collection('Papeleria').snapshotChanges().subscribe(data => {
      this.pape = data.map(e => {
        return {
          id: e.payload.doc.id,
          productos: e.payload.doc.data()
        };
      });
      console.log(this.pape);
      for (const pape of this.pape) {
        console.log(pape.productos.Url);
        this.storage.ref(pape.productos.Url).getDownloadURL().toPromise().then((url) => {
          pape.productos.Url2 = url;
        }).catch((error) => {
          console.log('khaaaa!!!', error);
        });
      }
    });
  }
  async openGlobal() {
    const modal = await this.ModCtrl.create({
      component: GlobalPage,
    });
    await modal.present();
  }
  async openProfile() {
    const modal = await this.ModCtrl.create({
      component: ProfilePage,
    });
    await modal.present();
  }
  async openSubsidiary() {
    const modal = await this.ModCtrl.create({
      component: SubsidiaryPage,
    });
    await modal.present();
  }
  search(event) {
    this.searchcomida = event.detail.value;
    this.searchelectric = event.detail.value;
    this.searchpape = event.detail.value;
    this.searchropa = event.detail.value;
  }
  in(nombre, precio) {
    this.db.collection('Ventas').add({
      Nombre: nombre,
      Precio: precio,
      Cantidad: 1
    });
   // console.log(id);
  }
  async openecar() {
    const popo = await  this.ModCtrl.create({
      component: CarPage,
    });
    await popo.present();
  }
}
