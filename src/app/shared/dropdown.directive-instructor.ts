import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownInstructor]'
})

export class DropdownInsDirective {
  constructor(
    private elRef : ElementRef
  ){

  }
  @HostBinding('class.open') isOpen = false;  
  // @HostListener('click') onClick(){
  //   this.isOpen = !this.isOpen;
  // } 

  @HostListener ('document:click', ['$event']) toggleOpen(event: Event){
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
 
}
