import { Component, OnInit } from '@angular/core';
import { phone } from '../phone';
import {Store} from '@ngrx/store'
import { PhoneItem } from '../store/models/phoneItem.model';
import { AppState } from '../store/models/app-state.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{

  phonedata=true;
  phone!:Array<PhoneItem>

  phoneItem$!:Observable<Array<PhoneItem>>;
  constructor(private store:Store<AppState>){}
  
  ngOnInit(): void {
      this.phoneItem$=this.store.select((store)=>store.phone)
  }

}
