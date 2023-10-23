import { Component, OnInit } from '@angular/core';
import { Cycle } from '../shared/cycle.model';

@Component({
  selector: 'app-my-answer',
  templateUrl: './my-answer.component.html',
  styleUrls: ['./my-answer.component.css']
})
export class MyAnswerComponent {
  cycles : number[] = [];

  getGameCycle(cycleData : Cycle){
    this.cycles.push(cycleData.value);
  }

}
