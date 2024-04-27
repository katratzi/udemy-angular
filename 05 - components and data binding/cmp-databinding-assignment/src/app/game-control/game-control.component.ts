import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  counter: number = 0
  intervalId = null

  startGame() {
    console.log("start");

    this.intervalId = setInterval(() => this.incrementCounter(), 500);
    console.log(this.intervalId);
  }

  stopGame() {
    console.log("stop");
    clearInterval(this.intervalId);
  }

  incrementCounter() {
    console.log(this.counter);

    this.counter += 1
    // console.log(this.counter);

  }
}
