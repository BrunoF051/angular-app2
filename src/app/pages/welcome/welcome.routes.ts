import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { PageNotFoundComponent } from 'pages/page-not-found/page-not-found.component';
import { UsersComponent } from 'pages/users/users.component';
import { LoggedOutComponent } from 'pages/logged-out/logged-out.component';
import { AdminPageComponent } from 'pages/admin-page/admin-page.component';
import { KeycloakGuard } from 'app/guards/keycloak.guard';
import { NotAuthorizedComponent } from 'pages/not-authorized/not-authorized.component';
import { ProfilePageComponent } from 'pages/profile-page/profile-page.component';
import { profileGuard } from 'app/guards/profile.guard';

export enum AppRoutes {
  Main = '',
  Users = 'users',
  Profile = 'profile/:username',
  Logout = 'logout',
  Admin = 'admin',
  NotAuthorized = 'not-authorized',
  NotFound = '**',
}

export const APP_ROUTES: Routes = [
  {
    path: AppRoutes.Main,
    component: WelcomeComponent,
    data: { roles: [] },
    title: $localize`Welcome`,
  },
  {
    path: AppRoutes.Users,
    canActivate: [KeycloakGuard],
    data: { roles: ['user'] },
    component: UsersComponent,
    title: $localize`Users`,
  },
  {
    path: AppRoutes.Profile,
    canActivate: [KeycloakGuard, profileGuard],
    data: { roles: ['user'], hiddenInMenu: true },
    component: ProfilePageComponent,
    title: $localize`Profile`,
  },
  {
    path: AppRoutes.Logout,
    component: LoggedOutComponent,
    data: { roles: [] },
    title: $localize`Logout`,
  },
  {
    path: AppRoutes.Admin,
    component: AdminPageComponent,
    canActivate: [KeycloakGuard],
    data: { roles: ['admin', 'user'] },
    title: $localize`Admin Page`,
  },
  {
    path: AppRoutes.NotAuthorized,
    component: NotAuthorizedComponent,
    data: { roles: [] },
    title: $localize`Not authorized`,
  },
  // ALlways keep NotFound as the last route
  {
    path: AppRoutes.NotFound,
    component: PageNotFoundComponent,
    data: { roles: [] },
    title: $localize`Page not found`,
  },
  // ALlways keep NotFound as the last route
];
