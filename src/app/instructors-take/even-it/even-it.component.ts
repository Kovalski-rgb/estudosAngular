import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-it',
  templateUrl: './even-it.component.html',
  styleUrls: ['./even-it.component.css']
})
export class EvenItComponent implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
