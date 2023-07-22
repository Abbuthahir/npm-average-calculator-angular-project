import { Component } from '@angular/core';
import {calculateAverage} from 'average-calculator'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'average-project';
  userInput: string = ''; 
  result: number = 0; 
  totalValue: number = 0;
  constructor(){
  }
  validateInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    const pattern = inputValue.replace(/[^0-9,]/g, '');
    inputElement.value = pattern;

    this.userInput = pattern;
  }
  calculateUserAverage() {
    const numbers = this.userInput.split(',')
      .map((num) => parseFloat(num.trim()));
      
      const total = numbers.reduce((acc, num) => acc + num, 0);
      const average = calculateAverage(numbers);
      this.result = average;
      this.totalValue = total;
  }
}
