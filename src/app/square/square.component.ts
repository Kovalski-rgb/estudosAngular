import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DotOrientation } from '../orientation.enum';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  trueBackgroundColor : string; 
  @Input('centerX') posCenterX : number = 0;
  @Input('centerY') posCenterY : number = 0;
  @Input('centerAt') posCenter : { centerX : number, centerY : number};
  @Input() width : number = 50;
  @Input() height : number = 50;
  @Input() backgroundColor : string = "green";
  @Input() xPos : number = 0;
  @Input() yPos : number = 0;
  yOffSet : number = 0;
  xOffSet : number = 0;
  isDragging : boolean = false; 
  showDots : boolean = false;
  borderWidth: number = 0;

  constructor() { }

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

  squareResize(data : {orientation: DotOrientation, pos:{ x: number, y: number}}){
    if(data.orientation === DotOrientation.RIGHT){
      this.width = data.pos.x - this.xPos;
    }
    if(data.orientation === DotOrientation.DOWN){
      this.height = data.pos.y - this.yPos;
    }
    if(data.orientation === DotOrientation.LEFT){
      this.width += this.xPos-data.pos.x;
      this.xPos = data.pos.x;
    }
    if(data.orientation === DotOrientation.UP){
      this.height += this.yPos-data.pos.y;
      this.yPos = data.pos.y;
    }
  }

  getPointLocation(orientation :DotOrientation){
    switch(orientation){
      case(DotOrientation.RIGHT):
        return {centerX:this.xPos+this.width, centerY:this.yPos+this.height/2}; 
      case(DotOrientation.LEFT):
        return {centerX:this.xPos, centerY:this.yPos+this.height/2};
      case(DotOrientation.UP):
        return {centerX:this.xPos+this.width/2, centerY:this.yPos};
      case(DotOrientation.DOWN):
        return {centerX:this.xPos+this.width/2, centerY:this.yPos+this.height};
  }
}

  onFocus(){
    this.borderWidth = 3;
    this.showDots = true;
  }

  onFocusOut(){
    this.borderWidth = 0;
    this.showDots = false;
  }

  squareStyle() {
    return {
      "border": "red",
      "border-style": "solid",
      "border-width": this.borderWidth+"px",
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
