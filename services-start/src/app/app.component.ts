import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  onAccountAdded(newAccountAdded: {name: string, status: string}) {
    console.log(newAccountAdded);
    this.accounts.push(newAccountAdded)
  }

  onStatusChanged(infoAccount: {id: number, newStatus: string}){
    console.log(infoAccount);
    this.accounts[infoAccount.id].status = infoAccount.newStatus;
  }
}
