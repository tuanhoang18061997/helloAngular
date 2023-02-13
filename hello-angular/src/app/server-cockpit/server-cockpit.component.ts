import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.css']
})
export class ServerCockpitComponent implements OnInit {

  serverElements = [
    {type: 'server', name: 'Test server',content: 'Just a Test!'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onGetRedServerAdded(redServerCreatedData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'redServer',
      name: redServerCreatedData.serverName,
      content: redServerCreatedData.serverContent
    })
  }
  onGetBlueServerAdded(blueServerCreatedData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueServer',
      name: blueServerCreatedData.serverName,
      content: blueServerCreatedData.serverContent
    })
  }

  onChangeFirstElement(){
    this.serverElements[0].name = 'Changed';
  }
}
