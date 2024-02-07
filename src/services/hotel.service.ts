import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de hoteles desde el backend
  getHotels(): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/hotels');
  }

}
