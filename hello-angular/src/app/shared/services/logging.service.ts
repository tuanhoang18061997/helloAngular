import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoggingService {
  logger(text: string, value: any): void{
    console.log(`${text} `, value);
  }
  constructor() { }

}
