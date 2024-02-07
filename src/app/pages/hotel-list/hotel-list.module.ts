import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HotelListComponent },
];

@NgModule({
  declarations: [HotelListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HotelListModule { }