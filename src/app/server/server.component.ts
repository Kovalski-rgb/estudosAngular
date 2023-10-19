import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {

    serverId : number;
    serverStatus : String;

    constructor(){
        let randomValue = (Math.random());
        this.serverId = Number.parseInt((randomValue*100).toFixed(0));
        this.serverStatus = this.serverId >= 50 ? "Online" : "Offline";
    }

    getColor(){
        return (this.serverStatus == "Online") ? 'palegreen' : 'coral';
    }

    getServerStatus(){
        return this.serverStatus;
    }

}