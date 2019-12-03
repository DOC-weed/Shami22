import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Producto} from "./producto/producto.js";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
carrito: Array<string>;
caro: string;
  constructor() {

  }
  addCar(id) {
    this.caro = id;
    const carr = this.carrito;
    carr.push(this.caro);
    console.log(carr);
    console.log(id);

  }



}
