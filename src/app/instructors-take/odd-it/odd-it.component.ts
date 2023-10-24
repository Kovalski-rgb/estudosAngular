import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-it',
  templateUrl: './odd-it.component.html',
  styleUrls: ['./odd-it.component.css']
})
export class OddItComponent implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
