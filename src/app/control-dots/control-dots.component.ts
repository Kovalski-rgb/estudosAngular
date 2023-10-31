import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DotOrientation } from '../orientation.enum';


@Component({
  selector: 'app-control-dots',
  templateUrl: './control-dots.component.html',
  styleUrls: ['./control-dots.component.css']
})
export class ControlDotsComponent implements OnInit{

  @Output() resizeTest = new EventEmitter<{orientation: DotOrientation, pos: {x: number, y: number}}>();
  @Input('centerX') posCenterX : number = 5;
  @Input('centerY') posCenterY : number = 5;
  @Input('centerAt') posCenter : { centerX : number, centerY : number};

  @Input() orientation : DotOrientation;
  isDragging : boolean = false; 
  trueBackgroundColor :string; 
  @Input() backgroundColor :string = "red";
  @Input() width : number = 10;
  @Input() height : number = 10;
  @Input() xPos : number = 10;
  @Input() yPos : number = 10;
  yOffSet : number = 0;
  xOffSet : number = 0;

  constructor() { 
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.xPos = this.posCenter.centerX - this.width/2;
    this.yPos = this.posCenter.centerY - this.height/2;
  }

  ngOnInit(): void {
    this.trueBackgroundColor = this.backgroundColor;
    if(this.posCenter){
      this.xPos = this.posCenter.centerX - this.width/2;
      this.yPos = this.posCenter.centerY - this.height/2;
    }else{
      if(this.posCenterX) this.xPos = this.posCenter.centerX - this.width/2;
      if(this.posCenterY) this.yPos = this.posCenter.centerY - this.height/2;
    }
  }

  triggerDragDrop(eventData:DragEvent){
    this.resizeTest.emit({orientation: this.orientation, pos: {x: eventData.clientX, y: eventData.clientY}});
  } 

  triggerDragging(eventData:DragEvent){
  }

  triggerDragLift(eventData:DragEvent){
  } 

  currentStyle() {
    return {
      "backgroundColor": this.backgroundColor,
      "borderRadius": "100%",
      "width": this.width+"px",
      "height": this.height+"px",
      "cursor": "grab",
      "position": "absolute",
      "top": this.yPos+"px",
      "left": this.xPos+"px",
    } ;
  } 

}
