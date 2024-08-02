import { Component } from '@angular/core';
import { AuthorizationService } from 'app/services/authorization.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-logged-out',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './logged-out.component.html',
  styleUrl: './logged-out.component.scss',
})
export class LoggedOutComponent {
  constructor(private readonly authorizationService: AuthorizationService) {}
  isLoggedIn = this.authorizationService.isLoggedIn();

  redirectToLogin() {
    return this.authorizationService.redirectToLoginPage();
  }
}
