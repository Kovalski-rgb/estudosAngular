import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

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
export class ServerElementComponent implements OnInit {
  @Input('srvElement')
  element: {
    type: string,
    name: string,
    content: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
