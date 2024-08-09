import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Route,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
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
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalConfirmComponent } from 'components/modal-confirm/modal-confirm.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
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
    NzDropDownModule,
    NzModalModule,
    ModalConfirmComponent,
    NzToolTipModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
  routes = APP_ROUTES;
  isLoggedIn = this.authorizationService.isLoggedIn();
  userRoles = this.authorizationService.getUserRoles();
  deleteConfig = {
    title: 'Are you sure you want to log out?',
    description: 'You are going to be logged out.',
    onConfirm: () => this.logout(),
    onCancel: () => this.closeConfirmLogoutModal(),
    okText: 'Logout',
    cancelText: 'Cancel',
    okDanger: true,
  };

  @ViewChild(ModalConfirmComponent)
  modalConfirmComponent!: ModalConfirmComponent;

  constructor(
    private authorizationService: AuthorizationService,
    private userIdleService: UserIdleService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    if (this.authorizationService.isLoggedIn()) {
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
          this.authorizationService.logout();
          this.userIdleService.resetTimer();
        });
    }
  }

  logout(): void {
    this.authorizationService.logout();
  }

  showConfirmLogoutModal(): void {
    this.modalConfirmComponent.showDeleteConfirm();
  }

  closeConfirmLogoutModal(): void {
    this.modalConfirmComponent.destroyModal();
  }

  menuItemVisibility(route: Route): boolean {
    const { path, data } = route;
    const notShowingPaths = ['', '**', 'logout', 'not-authorized'];

    if (data && path) {
      const isRoleRequired = data['roles'].length > 0;
      if (!isRoleRequired) {
        return !notShowingPaths.includes(path);
      }
      return data?.['roles']?.every((role: string) =>
        this.userRoles.includes(role),
      );
    } else {
      return false;
    }
  }
}
