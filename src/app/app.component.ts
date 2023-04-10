import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  url="https://www.bridgelabz.com/"
  imgurl="../assets/icon.png"

  ngOnInit(): void {
    this.title = "Hello From BL";
  }

  onClick($event:any){
    console.log("Button is Clicked",$event);
    window.open(this.url,"_blank");
  }

}
