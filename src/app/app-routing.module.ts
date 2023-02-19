import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { ListAllBookingComponent } from './list-all-booking/list-all-booking.component';
import { UpdateMovieBookingComponent } from './update-movie-booking/update-movie-booking.component';
import { DeleteMovieBookingComponent } from './delete-movie-booking/delete-movie-booking.component';

const routes: Routes = [
  {path:'' , component:ListAllBookingComponent},
  {path:'listAllBooking',component:ListAllBookingComponent},
  {path:'updateMovieBooking', component:UpdateMovieBookingComponent},
  {path:'deletemoviebooking' , component:DeleteMovieBookingComponent},
  {path:'movieForm',component:MovieFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
