import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus: string = 'No server was created';
  allowCreateServer: boolean = false;
  serverName: string = 'TestServerName';
  serverCreated: boolean = false;
  servers: string[] = ['Test server 1', 'Test server2'];
  constructor() { 
    setTimeout(() => {
      this.allowCreateServer = true;
    }, 1000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    console.log(this.serverName);
    this.servers.push(this.serverName);
    console.log( this.servers);
    return this.serverCreationStatus = 'Server was created success. Name is: ' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }
}