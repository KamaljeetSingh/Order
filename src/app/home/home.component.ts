import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isOpaque = false;
  title = 'app';

  toggleOpacity(event){
    
    if(event == 1){
      this.isOpaque = false;
    }
    else{
      this.isOpaque = true;
    }
  }
}
