import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  imgurl="https://www.bridgelabz.com/assets/header/BL_logo_index.png"

  ngOnInit(): void {
    this.title = "Hello From BL";
  }
}
