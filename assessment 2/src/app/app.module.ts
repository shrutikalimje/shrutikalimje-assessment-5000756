import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store/public_api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { phone } from './phone';
import { PhoneReducer } from './store/reducers/phone.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({phone:PhoneReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
