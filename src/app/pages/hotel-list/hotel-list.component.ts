import { Component, OnInit } from '@angular/core';
import { HotelListModule } from './hotel-list.module';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss'
})
export class HotelListComponent implements OnInit {
  public hoteles: any;

  constructor(
    private hotelService: HotelService
  ) {
    
  }

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe((hotels: any) => {
      this.hoteles = hotels;
      console.log(this.hoteles);
    });
  }

  bookingSearch(id: string) {
    console.log(id);
    
  }

}
