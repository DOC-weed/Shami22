import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable, pipe} from "rxjs";
import {finalize} from "rxjs/operators";
import {AlertController, ModalController} from "@ionic/angular";
import {GlobalPage} from "../global/global.page";
import {ProfilePage} from "../profile/profile.page";
import {SalesPage} from "../sales/sales.page";
import {SubsidiaryPage} from "../subsidiary/subsidiary.page";



@Component({
  selector: 'app-altas',
  templateUrl: './altas.page.html',
  styleUrls: ['./altas.page.scss'],
})
export class AltasPage {
  uploadProgress: Observable<number>;
  uploadURL: Observable<string>;
  producto;
  file: any;
  data: any[];
  categoria: string;

  constructor(private database: AngularFirestore, private storage: AngularFireStorage, private AlerCtrl: AlertController,
              private ModCtrl: ModalController) { }

  altaProducto() {
    const randomId = Math.random().toString(36).substring(2, 9);
    const filepath = `images/${randomId}`;
    const fileRef = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, this.file);
    this.uploadProgress = task.percentageChanges();
    task.snapshotChanges().pipe(
        finalize(() => this.uploadURL = fileRef.getDownloadURL())
    ).subscribe();
    const name = (document.getElementById('nombre') as HTMLIonInputElement).value;
    const price = parseInt((document.getElementById('precio') as HTMLIonInputElement).value);
    const stock = parseInt((document.getElementById('stock') as HTMLIonInputElement).value);
    const pricemen = parseInt((document.getElementById('precio-men') as HTMLIonInputElement).value);
    const pricemay = parseInt((document.getElementById('precio-may') as HTMLIonInputElement).value);
    this.producto = {Nombre: name, Precio: price, Url: filepath, Stock: stock, PrecioMen: pricemen, PrecioMay: pricemay};
    this.database.collection(this.categoria).add(this.producto);
    this.addProduct();
    const name1 = (document.getElementById('nombre') as HTMLIonInputElement);
    name1.value = '';
    const price1 =  (document.getElementById('precio') as HTMLIonInputElement);
    price1.value ='';
    const stock1 = (document.getElementById('stock') as HTMLIonInputElement);
    stock1.value = '';
    const pricemen1 = (document.getElementById('precio-men') as HTMLIonInputElement);
    pricemen1.value = '';
    const pricemay1 = (document.getElementById('precio-may') as HTMLIonInputElement);
    pricemay1.value = '';
  }
    showimg(event) {
    this.file = event.target.files[0];
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function() {
      const dataURL = reader.result;
      const img = (document.getElementById('output') as HTMLImageElement);
      if(typeof dataURL === 'string'){
        img.src = dataURL;
      }
    };
    reader.readAsDataURL(input.files[0]);
  }
  selectCategoria() {
    switch (this.categoria) {
      case 'comida':
        this.categoria = 'Comida';
        break;
      case 'electronicos':
        this.categoria = 'Electronicos';
        break;
      case 'ropa':
        this.categoria = 'Ropa';
        break;
      case 'papeleria':
        this.categoria = 'Papeleria';
        break;
    }
  }
  async addProduct() {
    const alert = await this.AlerCtrl.create({
      message: 'Producto agregado',
      animated: true
    });
    await alert.present();
  }

}
