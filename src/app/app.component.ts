import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { APP_ROUTES } from './pages/welcome/welcome.routes';
import { AuthorizationService } from './services/authorization.service';
import { UserIdleService } from 'angular-user-idle';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';
import { KeycloakAngularModule } from 'keycloak-angular';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzSpaceModule,
    NzMenuModule,
    NzDividerModule,
    NzGridModule,
    NzFlexModule,
    NzPageHeaderModule,
    NzButtonModule,
    RouterLink,
    RouterLinkActive,
    KeycloakAngularModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
  routes = APP_ROUTES;
  isLoggedIn = this.authorizationservice.isLoggedIn();

  constructor(
    private authorizationservice: AuthorizationService,
    private userIdleService: UserIdleService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    if (this.authorizationservice.isLoggedIn()) {
      this.userIdleService.startWatching();
      this.userIdleService
        .onTimerStart()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe();
      this.userIdleService
        .onTimeout()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          alert('Your session has timed out. Please log in again.');
          this.authorizationservice.logout();
          this.userIdleService.resetTimer();
        });
    }
  }
}
