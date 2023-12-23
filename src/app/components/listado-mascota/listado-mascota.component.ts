import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {Mascota} from '../../interfaces/mascota'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';


const listMascotas: Mascota[] = [
  {nombre: 'Bodoque', edad: 5, raza:'Golden', color:'Dorado', peso:20},
  {nombre: 'Titan', edad: 3, raza:'Golden', color:'Negro', peso:10}
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrl: './listado-mascota.component.css'
})
export class ListadoMascotaComponent implements AfterViewInit {
  //Variables del sistema(datos, condiciones booleanas etc)
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'acciones']; //Este nombre tiene que ser igual al nombre de la columna en el html
  dataSource = new MatTableDataSource<Mascota>(listMascotas);
  loading: boolean =false;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar){

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel='Items por pagina'

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarMascota(){
    this.loading=true
    setTimeout(()=>{ 
    this.loading=false

      this._snackBar.open("La mascota fue eliminada con exito", '', {duration: 4000, horizontalPosition:'right'});

    },3000);
    //Configuracion del snackbar
  }

}

