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

  // Assignment 4

  oddNumberArray: number[] = []
  evenNumberArray: number[] = []
  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumberArray.push(firedNumber)
    } else {
      this.oddNumberArray.push(firedNumber)
    }
  }

  // Assignment 5


  // onUserSetToActive(id: number) {
  //   console.log("id to Active: ", id);
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }

  // onUserSetToInActive(id: number){
  //   console.log("id to inActive: ", id );
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }
}
