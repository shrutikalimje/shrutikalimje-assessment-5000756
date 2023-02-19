import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieServiceService } from '../movie-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Output() emitData = new EventEmitter();

  // maxDate = new Date().toJSON().split('T')[0];
  
  public data={};
  submitted=false;
  addForm!: FormGroup;

  constructor(private location:Location , private fb:FormBuilder,
              private movieServices:MovieServiceService, private router:Router){
  
 }

 ngOnInit(){}

 get f(){return this.addForm.controls}

 public addMovie(type:string,message:string):void{
  this.submitted=true;
  if(this.addForm.invalid){
    return;
  }
  this.movieServices.createMovie(this.data);
  this.emitData.emit(this.submitted);
 }



 back(){
  this.location.back();
 }

  }
  

