import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeUsers: string[];
  // @Output() userSetToInActive = new EventEmitter<number>();
  constructor(private usersService : UsersService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activeUsers = this.usersService.activeUsers;
  }
  onSetToInactive(id: number){
  //   this.userSetToInActive.emit(id)
  this.usersService.setToInactive(id);
  }
}
