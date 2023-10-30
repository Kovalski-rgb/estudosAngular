import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor : string = 'transparent';
  @Input('appBetterHighlight') highlightColor : string = 'blue';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) { 

  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor);
  }

  @HostListener('mouseenter') mouseOver(eventData : Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highlightColor);
  }

  @HostListener('mouseleave') mouseLeave(eventData : Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor);
  }

}
