import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {Mascota} from '../../interfaces/mascota'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


const listMascotas: Mascota[] = [
  {nombre: 'Bodoque', edad: 5, raza:'Golden', color:'Dorado', peso:20}
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrl: './listado-mascota.component.css'
})
export class ListadoMascotaComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso']; //Este nombre tiene que ser igual al nombre de la columna en el html
  dataSource = new MatTableDataSource<Mascota>(listMascotas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel='Items por pagina'
    
  }

}

