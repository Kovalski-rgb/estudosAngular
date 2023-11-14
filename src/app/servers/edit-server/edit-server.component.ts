import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    
    this.server = {id: 0, name: "", status: ""};
    this.server.id = parseInt(this.route.snapshot.params['id']);
    this.route.queryParams
      .subscribe(
        (queryParams : Params) => {
          this.allowEdit = queryParams['allowEdit'] == 1;
        }
      )

    this.server = this.serversService.getServer(this.server.id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    console.log(this.allowEdit);
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
