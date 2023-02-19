import { Component,OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {FormBuilder , FormGroup , Validators} from '@angular/forms'
// import { from } from 'rxjs';

@Component({
  selector: 'app-update-movie-booking',
  templateUrl: './update-movie-booking.component.html',
  styleUrls: ['./update-movie-booking.component.css']
})
export class UpdateMovieBookingComponent implements OnInit {
  f_data ={};
  updateForm!:FormGroup;
  movieserv: any;
  router: any;
  location: any;

  get f(){
    return this.updateForm.controls;
  }

  ngOnInit(): void {
      this.f_data=this.movieserv.editData;
  }

  updateMovie(){
    this.movieserv.updateMovie(this.updateMovie);
    this.router.navigate(['/listAllBooking'])
  }

  back(){
    this.location.back();
  }
}
