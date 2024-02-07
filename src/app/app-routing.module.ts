// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/hotel-list/hotel-list.module').then(m => m.HotelListModule) },
  { path: 'booking', loadChildren: () => import('./pages/booking/booking.module').then(m => m.BookingModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
