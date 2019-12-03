import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";

@Component({
  selector: 'app-subsidiary',
  templateUrl: './subsidiary.page.html',
  styleUrls: ['./subsidiary.page.scss'],
})
export class SubsidiaryPage implements OnInit {

  constructor(private ModCtrl: ModalController, private NavCtrl: NavController) { }

  ngOnInit() {
  }
back() {
    this.NavCtrl.navigateForward('./sales');
}
}
