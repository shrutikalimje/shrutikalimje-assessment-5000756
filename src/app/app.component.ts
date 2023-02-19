import { Component, ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('closeBtn') closeBtn!:ElementRef;
  title = 'app';
  closeModal(){
    this.closeBtn.nativeElement.click(event,this.closeBtn);
  }
}
