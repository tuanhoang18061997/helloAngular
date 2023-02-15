import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;

  counter: number = 0;
  // @HostListener('window:keydown.enter', ['$event'])
  // handleKeyDown(event: KeyboardEvent) {
  //   this.counter++;
  // }
  @HostListener('window:keydown.enter', ['$event']) handleKeyDown(event: KeyboardEvent) {
    this.counter++;
  }
  numberOfClicks = 0;

  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }

  // Example ngSwitchCase
  value: number = Math.floor(Math.random()*5);
}
