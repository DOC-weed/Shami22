import { Pipe, PipeTransform } from '@angular/core';
import {element} from 'protractor';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], Texto: string): any[] {
   if (Texto === '') {
     return arreglo;
   }
   Texto = Texto.toLowerCase();
    // tslint:disable-next-line:no-shadowed-variable
   return  arreglo.filter(element => {
     return element.productos.Nombre.toLowerCase().includes(Texto);
   });

  }

}
