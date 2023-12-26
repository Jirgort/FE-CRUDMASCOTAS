import { Component } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../../interfaces/mascota';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrl: './ver-mascota.component.css'
})
export class VerMascotaComponent {
  id:Number;
  mascota!:Mascota;
  loading: boolean=false;
  constructor(private _mascotaService: MascotaService, private aRoute:ActivatedRoute){
   
    this.id= Number(this.aRoute.snapshot.paramMap.get('id')); 

  }
  ngOnInit(): void{
    this.obtenerMascota();
    
  }

  obtenerMascota(){
    this.loading=true;
    this._mascotaService.getMascota(this.id).subscribe(data=>{
     this.mascota = data;
     this.loading=false
    })

  }

}
