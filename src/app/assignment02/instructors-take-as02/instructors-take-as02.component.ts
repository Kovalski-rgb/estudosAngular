import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors-take-as02',
  templateUrl: './instructors-take-as02.component.html',
  styleUrls: ['./instructors-take-as02.component.css']
})
export class InstructorsTakeAs02Component implements OnInit {

  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  onReset() {
    this.username = '';
  }

}
