import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment03',
  templateUrl: './assignment03.component.html',
  styleUrls: ['./assignment03.component.css']
})
export class Assignment03Component implements OnInit {

  isHidden : boolean;
  buttonLog : string[];

  constructor() {
    this.isHidden = false;
    this.buttonLog = [];
  }

  ngOnInit(): void {
  }

  toggleP_Visibility(): void{
    this.isHidden = !this.isHidden;
    this.buttonLog.push("Action registered at "+Date.now());
  }

  isChangeText() : boolean{
    return (this.buttonLog.length >= 5);
  }

  getBgColor() : string{
    return this.isChangeText() ? 'blue' : '';
  }

}
