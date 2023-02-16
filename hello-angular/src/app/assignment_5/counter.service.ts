import { Injectable } from '@angular/core';
import { LoggingService } from '../shared/services/logging.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  constructor(private logging: LoggingService){}

  incrementAcToIn(){
    this.activeToInactiveCounter++;
    this.logging.logger("Counter Active to Inactive: ", this.activeToInactiveCounter)
  }

  incrementIntoAc(){
    this.inactiveToActiveCounter++;
    this.logging.logger("Counter Inactive to Active: ", this.inactiveToActiveCounter)
  }
}
