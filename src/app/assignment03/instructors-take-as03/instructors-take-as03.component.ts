import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors-take-as03',
  templateUrl: './instructors-take-as03.component.html',
  styleUrls: ['./instructors-take-as03.component.css']
})
export class InstructorsTakeAs03Component implements OnInit {

  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(): void{
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1)
  }

}
