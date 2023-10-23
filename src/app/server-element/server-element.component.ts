import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // view encapsulation é basicamente o ""container"" 
  // de cada css, geralmente é tudo por ShadowDom, 
  // ou seja, se eu pedir pra alterar o body no css
  // desse componente, somente o body do componente é alterado, nada mais
  encapsulation: ViewEncapsulation.Emulated //None, ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement')
  element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name : string;
  @ViewChild('heading') header : ElementRef;

  constructor() {
    console.log("Constructor call!");
  }

  ngOnInit(): void {
    console.log("ngOnInit call!");
    console.log("textContent: "+this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges call!");
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck call!");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit call!");
  }

  ngAfterContentChecked(): void{
    console.log("AfterContentChecked call!");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit call!");
    console.log("textContent: "+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Call!");
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy call!');;
  }

}
