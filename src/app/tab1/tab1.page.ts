import { Component } from '@angular/core';
import {ModalController, NavController, PopoverController} from '@ionic/angular';
import {AltasPage} from '../altas/altas.page';
import {BajasPage} from '../bajas/bajas.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private NavC: NavController, private PopCtrl: PopoverController, private ModCtrl: ModalController) {}

  openMenu() {
    document.querySelector('ion-menu-controller')
        .open();
  }
  Move(){
    this.NavC.navigateForward('/altas');
  }
  async Openaltaspage() {
    const altas1 = await this.ModCtrl.create({
      component: AltasPage,
    });
    await altas1.present();
  }
  async Opendeletepage() {
    const delete1 = await this.ModCtrl.create({
      component: BajasPage,
    });
    await delete1.present();
  }
}
/*import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable, pipe} from "rxjs";
import {finalize} from "rxjs/operators";
import{Router} from "@angular/router";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
    uploadProgress: Observable<number>;
    uploadURL: Observable<string>;
    producto;

  file: any;
  data : any[];

  constructor(private database: AngularFirestore, private storage: AngularFireStorage) {}
  ngOnInit(){
    this.showdata();
  }

  altaClientes(){
    const randomId=Math.random().toString(36).substring(2,9);
    const filepath = `images/${randomId}`;
    const fileRef = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, this.file);
    this.uploadProgress= task.percentageChanges();
    task.snapshotChanges().pipe(
        finalize(() => this.uploadURL = fileRef.getDownloadURL())
    ).subscribe();
    const name  = (document.getElementById('nombre') as HTMLIonInputElement).value;
    const price =  parseInt((document.getElementById('precio') as HTMLIonInputElement).value);
    const stock = parseInt((document.getElementById('stock') as HTMLIonInputElement).value);
   this.producto.Nombre = (document.getElementById('nombre') as HTMLIonInputElement).value;
    this.producto.Url = filepath;
    this.producto.Precio = parseInt((document.getElementById('precio') as HTMLIonInputElement).value);
    this.producto.Stock = parseInt((document.getElementById('stock') as HTMLIonInputElement).value);


  this.producto ={Nombre: name,Precio: price,Url: filepath, Stock: stock};
    this.database.collection('Productos').add(this.producto);
  }

    showimg(event){

      this.file = event.target.files[0];

      const input = event.target;
      const reader = new FileReader();
      reader.onload = function(){
        const dataURL = reader.result;
        const img = (document.getElementById('output') as HTMLImageElement);
        if(typeof dataURL === 'string'){
          img.src = dataURL;
        }
      };
      reader.readAsDataURL(input.files[0]);
    }

  showdata(){
    this.database.collection('Productos').snapshotChanges().subscribe(data =>{
      this.data = data.map(e => {
        return {
          id: e.payload.doc.id,
          productos: e.payload.doc.data()
        };
      });
      console.log(this.data);
      for(const producto of this.data){
        console.log(producto.productos.Url);
        this.storage.ref(producto.productos.Url).getDownloadURL().toPromise().then((url) =>{
          producto.productos.Url2 = url;
        }).catch((error)=>{
          console.log('khaaaa!!!', error);
        });
      }
    });
  }

}
*/
