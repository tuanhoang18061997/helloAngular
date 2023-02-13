import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // tạo 2 event emiiter để xuất cái server được tạo từ 2 button
  @Output('redServerCreatedData') redServerInfo = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('blueServerCreatedData') blueServerInfo = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName: string = '';
  // newServerContent: string = '';

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onAddRedServer(nameInput: HTMLInputElement){
    console.log(this.serverContentInput.nativeElement.value);
    // console.log("Clicked button Red Server");
    // console.log(nameInput.value);
    this.redServerInfo.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueServer(nameInput: HTMLInputElement){
    console.log("Clicked button Blue Server");
    this.blueServerInfo.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

}
