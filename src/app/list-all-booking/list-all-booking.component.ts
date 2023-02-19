import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all-booking',
  templateUrl: './list-all-booking.component.html',
  styleUrls: ['./list-all-booking.component.css']
})
export class ListAllBookingComponent implements OnInit {
// movie: any;
    moviedata=true;
    movies!: Movie[];

    constructor(private MovieService: MovieServiceService, private router:Router ){}

    ngOnInit(): void {
        this.movies =this.MovieService.f_data;
    }

    deletemovie(i:any){
      if(confirm("deleting movie! are you sure?")){
        const index = this.movies.indexOf(i);
        this.movies.splice(index,1);
      }
    }

    editmovie(editData:any){
      this.MovieService.editData=editData;
      this,this.router.navigate(['/update',editData.id])
    }
}
