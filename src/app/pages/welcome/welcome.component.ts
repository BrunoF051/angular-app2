import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'app/services/authorization.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [NzButtonModule, NzGridModule, NzTypographyModule],
})
export class WelcomeComponent implements OnInit {
  constructor(private readonly authorizationService: AuthorizationService) {}
  isLoggedIn = this.authorizationService.isLoggedIn();

  redirectToLogin() {
    return this.authorizationService.redirectToLoginPage();
  }
  ngOnInit() {}
}
