import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [
    `
      .online{
        background-color: #6d88bf;
        color: white !important;
      }
      .offline{
        background-color: gray;
        color: black !important;
      }
    `
  ]
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';

  // getServerStatus(){
  //   return this.serverStatus[Math.floor(Math.random() * this.serverStatus.length)];
  // }
  getServerStatus(){
    return this.serverStatus;
  }
  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getColor(){
    return this.serverStatus === 'online' ? 'blue' : 'red';
  }
}
