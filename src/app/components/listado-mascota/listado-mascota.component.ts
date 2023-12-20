import { Component } from '@angular/core';
import {Mascota} from '../../interfaces/mascota'


const ELEMENT_DATA: Mascota[] = [
  {nombre: 'Bodoque', edad: 5, raza:'Golden', color:'Dorado', peso:20}
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrl: './listado-mascota.component.css'
})
export class ListadoMascotaComponent {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso']; //Este nombre tiene que ser igual al nombre de la columna en el html
  dataSource = ELEMENT_DATA;

  
}
