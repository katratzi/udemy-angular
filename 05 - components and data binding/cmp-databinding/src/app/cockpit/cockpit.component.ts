import { Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
  encapsulation: ViewEncapsulation.None, // apply styles globally with this
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef

  onAddServer(nameInput) {
    // we pass the html element, in this case input
    // so we can look at the value of it
    // console.log(nameInput.value);

    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })

  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
