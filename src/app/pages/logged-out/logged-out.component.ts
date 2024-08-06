import { Component } from '@angular/core';
import { AuthorizationService } from 'app/services/authorization.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-logged-out',
  standalone: true,
  imports: [NzButtonModule, NzGridModule, NzTypographyModule],
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
