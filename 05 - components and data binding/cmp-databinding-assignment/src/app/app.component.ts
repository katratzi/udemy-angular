import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odds: number[] = []
  evens: number[] = []

  onCounterChanged(event: { counter: number }) {
    console.log("hello " + event.counter);

    // push onto correct even or odd array
    if (event.counter % 2 == 0) {
      this.evens.push(event.counter)
    }
    else {
      this.odds.push(event.counter)
    }
  }
}