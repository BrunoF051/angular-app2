import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthorizationService } from 'app/services/authorization.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private readonly authorizationService: AuthorizationService) {}
  isLoggedIn() {
    return this.authorizationService.isLoggedIn();
  }
  redirectToLogin() {
    return this.authorizationService.redirectToLoginPage();
  }
  ngOnInit() {}
}
