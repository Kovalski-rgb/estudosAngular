import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DotOrientation } from 'src/app/orientation.enum';

@Directive({
  selector: '[doResize]'
})
export class DoResizeDirective implements AfterViewInit {


  constructor(
    private el : ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    console.log(this.el.nativeElement);
  }
  

  @HostListener('resizeTest') onResize(data:{orientation: DotOrientation, pos:number, dotSize:number}){
    console.log("this is called!");
    if(data.orientation === DotOrientation.RIGHT){
      let signal = (this.el.nativeElement.width+this.el.nativeElement.xPos >= data.pos) ? -2 : +1; 
      console.log(signal);
      let result = (data.pos * signal) + data.dotSize/2;
      this.renderer.setStyle(this.el.nativeElement, 'background-color' , 'blue');
    } 
  }

}
