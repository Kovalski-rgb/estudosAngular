import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cycle } from '../../shared/cycle.model';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('onGameCycle') gameClock = new EventEmitter<Cycle>();
  interval : any;
  counter : number;
  isIntervalRolling : boolean;

  constructor() {
    this.counter = 0;
    this.isIntervalRolling = false;
  }

  ngOnInit(): void {
  }

  onStartInterval(){
    if(!this.isIntervalRolling){
      this.interval = setInterval(() => {
        this.counter++;
        this.gameClock.emit(new Cycle(this.counter));
        console.log(this.counter);
      }, 1000);
      this.isIntervalRolling = true; 
    }
  }

  onStopInterval(){
    clearInterval(this.interval);
    this.isIntervalRolling = false;
  }
  

}