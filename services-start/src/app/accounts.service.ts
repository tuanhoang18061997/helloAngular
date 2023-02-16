import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(newNameAccount: string, newStatusAccount: string){
    console.log(newNameAccount, newStatusAccount);
    this.accounts.push({name: newNameAccount, status: newStatusAccount});
  }

  updateStatus(id: number, status: string){
    // console.log("Change with id = ", id, "status changed = ", status);
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status)
  }

}
