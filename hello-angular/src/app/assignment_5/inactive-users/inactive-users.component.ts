import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {


  inactiveUsers: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
  onSetToActive(id: number){
    // this.userSetToActive.emit(id);
    this.usersService.setToActive(id);
  }
}
