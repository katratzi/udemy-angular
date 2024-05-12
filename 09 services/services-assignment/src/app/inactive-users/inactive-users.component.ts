import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

@Injectable()
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UserService) { }

  onSetToActive(id: number) {
    console.log(id);

    this.usersService.setToActive(id)
  }
}
