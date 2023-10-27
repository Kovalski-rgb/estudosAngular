import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DotOrientation } from '../orientation.enum';


@Component({
  selector: 'app-control-dots',
  templateUrl: './control-dots.component.html',
  styleUrls: ['./control-dots.component.css']
})
export class ControlDotsComponent implements OnInit {

  @Output() resizeTest = new EventEmitter<{orientation: DotOrientation, pos:number, dotSize:number}>();
  @Input('centerX') posCenterX : number = 5;
  @Input('centerY') posCenterY : number = 5;
  @Input('centerAt') posCenter : { centerX : number, centerY : number};

  isDragging : boolean = false; 
  trueBackgroundColor :String; 
  @Input() backgroundColor :String = "red";
  @Input() width : number = 10;
  @Input() height : number = 10;
  @Input() xPos : number = 10;
  @Input() yPos : number = 10;
  yOffSet : number = 0;
  xOffSet : number = 0;

  constructor() { 
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
    // this.backgroundColor = this.trueBackgroundColor;
    // this.isDragging = false;
    this.xPos = eventData.clientX - this.xOffSet;
    this.yPos = eventData.clientY - this.yOffSet;
    // console.log(this.xPos, this.yPos);
    this.resizeTest.emit({orientation: DotOrientation.RIGHT, pos: this.xPos, dotSize:this.width});
  } 

  triggerDragging(eventData:DragEvent){
    // let xPos = eventData.clientX;
    // console.log(eventData);
    // this.resizeTest.emit({orientation: DotOrientation.RIGHT, pos: xPos});
  }

  triggerDragLift(eventData:DragEvent){
    // this.backgroundColor = "transparent";
    // this.isDragging = true;
    this.xOffSet = (eventData.offsetX);
    this.yOffSet = (eventData.offsetY);
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

  // ghostDot() {
  //   return {
  //     "backgroundColor": this.trueBackgroundColor,
  //     "borderRadius": "100%",
  //     "width": this.width+"px",
  //     "height": this.height+"px",
  //     "cursor": "pointer",
  //     "position": "absolute",
  //     "top": this.yPos+"px",
  //     "left": this.xPos+"px",
  //   }
  // } 

}
