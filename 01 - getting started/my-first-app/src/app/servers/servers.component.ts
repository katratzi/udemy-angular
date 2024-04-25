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
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
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
