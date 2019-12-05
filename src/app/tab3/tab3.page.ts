import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {PopoverController} from "@ionic/angular";
import {AddprovPage} from "../addprov/addprov.page";
import {CallNumber} from "@ionic-native/call-number/ngx";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit {
  provers: any[];

  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private popo: PopoverController, private callNumber: CallNumber) {
  }

  ngOnInit() {
    this.getdata();
  }

  getdata() {
    this.db.collection('Proveedor').snapshotChanges().subscribe(data => {
      this.provers = data.map(e => {
        return {
          id: e.payload.doc.id,
          datos: e.payload.doc.data()
        };
      });
      for (const dato of this.provers) {
        this.storage.ref(dato.datos.Imagen).getDownloadURL().toPromise().then(url => {
          dato.datos.Url = url;
        }).catch(error => {
          console.log(error, 'nel');
        });
      }
    });
  }

  async addprov() {
    const popo = await this.popo.create({
      component: AddprovPage,
      cssClass: '',
    });
    popo.present().then(() => {
      popo.onDidDismiss().then(() => {
        this.getdata();
      });
    });
  }
}
