import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { PracticingComponent } from './practicing/practicing.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServerCockpitComponent } from './server-cockpit/server-cockpit.component';
import { ServerElementComponent } from './server-cockpit/server-element/server-element.component';
import { CockpitComponent } from './server-cockpit/cockpit/cockpit.component';
import { GameControlComponent } from './assignment_4/game-control/game-control.component';
import { OddComponent } from './assignment_4/odd/odd.component';
import { EvenComponent } from './assignment_4/even/even.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    PracticingComponent,
    ServerComponent,
    ServersComponent,
    ServerCockpitComponent,
    ServerElementComponent,
    CockpitComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,PracticingComponent]
})
export class AppModule { }
