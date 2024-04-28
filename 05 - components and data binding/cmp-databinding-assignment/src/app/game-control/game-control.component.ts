import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  counter: number = 0
  intervalId = null

  @Output() counterChanged = new EventEmitter<{ counter: number }>();

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
    // emit the counter
    this.counterChanged.emit({ counter: this.counter })

  }
}
