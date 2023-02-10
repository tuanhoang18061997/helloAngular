import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing',
  templateUrl: './practicing.component.html',
  styleUrls: ['./practicing.component.css']
})
export class PracticingComponent implements OnInit {

  // Practice 2
  userName: string = '';

  // Practice 3
  isShowPassWord: boolean = true;
  logs: number[] = [];
  onToggleShowPassword() {
    this.isShowPassWord = !this.isShowPassWord;
    this.logs.push(this.logs.length + 1);
    console.log(this.logs);

  }

  getBackgroundColorForLog(log: number) {
    if (log >= 5 && log % 2 === 0) {
      return 'blue';
    } else if (log >= 5 && log % 2 !== 0) {
      return '#1d1d4a';
    } else {
      return '';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  onResetInput() {
    this.userName = '';
  }
}