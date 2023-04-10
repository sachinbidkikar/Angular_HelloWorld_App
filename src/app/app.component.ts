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
  name= ""
  errorName:string = ""

  ngOnInit(): void {
    this.title = "Welcome !!";
  }

  onClick($event:any){
    console.log("Button is Clicked",$event);
    window.open(this.url,"_blank");
  }

  onInput($event:any){
    console.log("Change Event occured",$event);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.name)){
        this.errorName = ""
    } else this.errorName = "incorrect Name"
  }

}
