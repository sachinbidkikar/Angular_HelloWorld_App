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
  name:String = ""

  ngOnInit(): void {
    this.title = "Welcome !!";
  }

  onClick($event:any){
    console.log("Button is Clicked",$event);
    window.open(this.url,"_blank");
  }

}
