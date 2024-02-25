import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  allowNewServer = false
  serverCreationStatus = 'No server was created';
  serverName = '';
  userName = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  onCreateServer() {
    console.log("create");

    this.serverCreated = true
    this.serverCreationStatus = 'Server was created with name ' + this.serverName
  }

  onSubmitUsername() {
    this.userName = '';
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
