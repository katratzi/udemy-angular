export class CounterService {
    activeCount: number = 0
    inactiveCount: number = 0

    logActive() {
        this.activeCount += 1
        console.log("active " + this.activeCount);
    }

    logInactive() {
        this.inactiveCount += 1
        console.log("inactive " + this.inactiveCount);
    }
}