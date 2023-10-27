import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DotOrientation } from '../orientation.enum';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  trueBackgroundColor :String; 
  @Input('centerX') posCenterX : number = 0;
  @Input('centerY') posCenterY : number = 0;
  @Input('centerAt') posCenter : { centerX : number, centerY : number};
  @Input() width : number = 50;
  @Input() height : number = 50;
  @Input() backgroundColor : String = "green";
  @Input() xPos : number = 0;
  @Input() yPos : number = 0;
  yOffSet : number = 0;
  xOffSet : number = 0;
  isDragging : boolean = false; 

  constructor(
    private el : ElementRef,
    private renderer: Renderer2
  ) { }

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
    this.backgroundColor = this.trueBackgroundColor;
    this.xPos = eventData.clientX - this.xOffSet;
    this.yPos = eventData.clientY - this.yOffSet;
    this.isDragging = false;
  } 

  triggerDragLift(eventData:DragEvent){
    this.xOffSet = (eventData.offsetX);
    this.yOffSet = (eventData.offsetY);
    this.isDragging = true;
  } 

  squareTestResize(data : {orientation: DotOrientation, pos:number, dotSize:number}){
    if(data.orientation === DotOrientation.RIGHT){
      let signal = (this.width+this.xPos >= data.pos) ? -1 : +1; 
      this.width = (data.pos * signal) + data.dotSize/2;
    }
  }

  squareStyle() {
    return {
      "width": this.width+"px",
      "height": this.height+"px",
      "backgroundColor": this.backgroundColor,
      "position": "absolute",
      "top": this.yPos+"px",
      "left": this.xPos+"px",
      "z-index": -1,
    }
  } 

}
