import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
// colchetes servem pra não precisar colocar colchetes no html (<a [appBasicHighlight]> fica <a appBasicHighlight> )
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';    
    }
}