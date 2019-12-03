import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  comida: any[];
  ropa: any[];
  electric: any[];
  pape: any[];
  searchcomida= '';
  searchropa='';
  searchelectric='';
  searchpape='';


  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private AlertCtrl: AlertController) {
  }
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
  async updatecliente1(id, url) {
    const alert = await this.AlertCtrl.create({
      message: '¿Esta seguro de eliminar el producto?',
      buttons: [
        {text: 'Cancelar',
          role: 'Cancel',
          handler: blah => {
            console.log('confirm cancel: blah');
          }},
        {text: 'Confirmar',
          handler: () => {
            console.log(url);
            this.db.collection('Comida').doc(id).delete();
            this.storage.ref(url).delete();
          }}
      ],
    });
    return alert.present();
  }
  async updatecliente2(id, url) {
    const alert = await this.AlertCtrl.create({
      message: '¿Esta seguro de eliminar el producto?',
      buttons: [
        {text: 'Cancelar',
          role: 'Cancel',
          handler: blah => {
            console.log('confirm cancel: blah');
          }},
        {text: 'Confirmar',
          handler: () => {
            console.log(url);
            this.db.collection('Ropa').doc(id).delete();
            this.storage.ref(url).delete();
          }}
      ],
    });
    return alert.present();
  }
  async updatecliente3(id, url) {
    const alert = await this.AlertCtrl.create({
      message: '¿Esta seguro de eliminar el producto?',
      buttons: [
        {text: 'Cancelar',
          role: 'Cancel',
          handler: blah => {
            console.log('confirm cancel: blah');
          }},
        {text: 'Confirmar',
          handler: () => {
            console.log(url);
            this.db.collection('Papeleria').doc(id).delete();
            this.storage.ref(url).delete();
          }}
      ],
    });
    return alert.present();
  }
  async updatecliente4(id, url) {
    const alert = await this.AlertCtrl.create({
      message: '¿Esta seguro de eliminar el producto?',
      buttons: [
        {text: 'Cancelar',
          role: 'Cancel',
          handler: blah => {
            console.log('confirm cancel: blah');
          }},
        {text: 'Confirmar',
          handler: () => {
            console.log(url);
            this.db.collection('Electronicos').doc(id).delete();
            this.storage.ref(url).delete();
          }}
      ],
    });
    return alert.present();
  }
  search(event) {
    this.searchcomida = event.detail.value;
    this.searchelectric = event.detail.value;
    this.searchpape = event.detail.value;
    this.searchropa = event.detail.value;
  }

}
