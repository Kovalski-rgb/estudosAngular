import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  toggleDropdown :boolean = false;
  constructor( 
    private renderer : Renderer2,
    private elRef : ElementRef
  ) { }

  @HostListener('click') onClick(){
    this.toggleDropdown = !this.toggleDropdown;
    if(this.toggleDropdown){ 
      this.renderer.addClass(this.elRef.nativeElement, "open");
    }else{
      this.renderer.removeClass(this.elRef.nativeElement, "open");
    } 
  } 
 
}
