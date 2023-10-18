import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    serverId : Number;
    serverStatus : String;

    constructor(){
        let randomValue = (Math.random());
        this.serverId = (randomValue*100);
        this.serverStatus = randomValue > 0.5 ? "Online" : "Offline";
    }

    getColor(){
        return (this.serverStatus == "Online") ? 'green' : 'red';
    }

    getServerStatus(){
        return this.serverStatus;
    }

}