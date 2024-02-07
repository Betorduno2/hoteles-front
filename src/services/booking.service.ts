import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  // Método para enviar la información de la reserva al backend
  bookHotel(bookingData: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/bookings', bookingData);
  }

}
