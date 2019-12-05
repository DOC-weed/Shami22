import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {AlertController, PopoverController} from "@ionic/angular";
import {finalize} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-addprov',
  templateUrl: './addprov.page.html',
  styleUrls: ['./addprov.page.scss'],
})
export class AddprovPage implements OnInit {
  file: any;
  uploadProgress: Observable<number>;
  uploadURL: Observable<string>;
  proveedor;
  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private popo: PopoverController, private alert: AlertController) { }

  ngOnInit() {
  }
  getImg(event) {
    this.file = event.target.files[0];
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function() {
      const dataURL = reader.result;
      const img = (document.getElementById('output') as HTMLImageElement);
      if (typeof dataURL === 'string'){
        img.src = dataURL;
      }
    };
    reader.readAsDataURL(input.files[0]);
  }
  add() {
    const randomId = Math.random().toString(36).substring(2, 9);
    const filepath = `images/${randomId}`;
    const fileRef = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, this.file);
    this.uploadProgress = task.percentageChanges();
    task.snapshotChanges().pipe(
        finalize(() => this.uploadURL = fileRef.getDownloadURL())
    ).subscribe();
    const name = (document.getElementById('name') as HTMLIonInputElement).value;
    const dir = (document.getElementById('direccion') as HTMLIonInputElement).value;
    const rfc = (document.getElementById('rfc') as HTMLIonInputElement).value;
    const tel = parseInt((document.getElementById('tel') as HTMLIonInputElement).value);
    this.proveedor = {Nombre: name, Direccion: dir, RFC: rfc, Telefono: tel, Imagen: filepath};
    this.db.collection('Proveedor').add(this.proveedor).then(() => {
      this.addProveer();
      const name1 = (document.getElementById('nombre') as HTMLIonInputElement);
      name1.value = '';
      const price1 =  (document.getElementById('direccion') as HTMLIonInputElement);
      price1.value ='';
      const stock1 = (document.getElementById('rfc') as HTMLIonInputElement);
      stock1.value = '';
      this.file = null;
    });
  }
  async addProveer() {
    const alertt = await this.alert.create({
      message: 'Se agrego proveedor',
      buttons: ['Aceptar'],
    });
    alertt.present();
  }
  dismiss() {
    this.popo.dismiss();
  }

}
