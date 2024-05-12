import { Component, Injectable, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  activeUsers: string[] = []
  inactiveUsers: string[] = []

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers
    this.inactiveUsers = this.usersService.inactiveUsers
  }
}
