import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'app/services/authorization.service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [NzButtonModule],
})
export class WelcomeComponent implements OnInit {
  constructor(private readonly authorizationService: AuthorizationService) {}
  isLoggedIn = this.authorizationService.isLoggedIn();

  redirectToLogin() {
    return this.authorizationService.redirectToLoginPage();
  }
  ngOnInit() {}
}
