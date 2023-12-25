import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../interfaces/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private myAppUrl: string = 'https://localhost:7124/';
  private myApiUrl: string = 'api/Mascota/';
  
  constructor(private http: HttpClient) { }
 
  getMascotas():Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
