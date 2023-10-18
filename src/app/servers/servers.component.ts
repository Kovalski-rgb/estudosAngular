import { Component, OnInit } from '@angular/core';

  // selector: [app-servers], //para diretivas (vide exemplo relativo no html)
  // selector: .app-servers, //para classes (vide exemplo relativo no html)
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } ,4000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was Created!"
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
