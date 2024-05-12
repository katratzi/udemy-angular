import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
@Injectable()
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UserService) { }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id)
  }
}
