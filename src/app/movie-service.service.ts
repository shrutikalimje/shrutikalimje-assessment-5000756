import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Movie } from './movie';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }
  ApiURL!:string;
  editData={};

  f_data=[{
    
    'id':1,
    'movie_name':'journey',
    'movie_bookingdate':'2023-01-12',
    'noOftickets':2,
    'totalamount':50

  },
  {
    'id':1,
    'movie_name':'happy',
    'movie_bookingdate':'2023-01-11',
    'noOftickets':4,
    'totalamount':50

  },
  {
    'id':1,
    'movie_name':'exotic',
    'movie_bookingdate':'2023-01-01',
    'noOftickets':1,
    'totalamount':50
  },
  {
    'id':1,
    'movie_name':'DDLJ',
    'movie_bookingdate':'2023-01-02',
    'noOftickets':3,
    'totalamount':50
  }];

  createMovie(data:any){
    this.f_data.push(data);
  }
  delMovie(id:number){
    return this.http.delete<Movie[]>(this.ApiURL +id);
  }
  getMovieById(id:number){
    return this.http.get<Movie>(this.ApiURL + '/' + id);
  }
  updateMovie(movie: Movie){
    return this.http.put(this.ApiURL+'/'+movie.id, movie);
  }
}
