import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateMovieBookingComponent } from './update-movie-booking/update-movie-booking.component';
import { DeleteMovieBookingComponent } from './delete-movie-booking/delete-movie-booking.component';
import { ListAllBookingComponent } from './list-all-booking/list-all-booking.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDirective } from './movie.directive';
// import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ModalModule } from 'ngb-modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UpdateMovieBookingComponent,
    DeleteMovieBookingComponent,
    ListAllBookingComponent,
    MovieFormComponent,
    MovieDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // MatExpansionModule,
    BrowserAnimationsModule,
    // NotifierModule.withConfig(customNotifierOptions),
    // ModalModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
