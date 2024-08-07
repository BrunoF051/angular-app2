import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { PageNotFoundComponent } from 'pages/page-not-found/page-not-found.component';
import { UsersComponent } from 'pages/users/users.component';
import { LoggedOutComponent } from 'pages/logged-out/logged-out.component';
import { authGuard } from 'app/guards/auth.guard';

export enum AppRoutes {
  Main = '',
  Users = 'users',
  Logout = 'logout',
  NotFound = '**',
}

export const APP_ROUTES: Routes = [
  {
    path: AppRoutes.Main,
    component: WelcomeComponent,
    title: $localize`Welcome`,
  },
  {
    path: AppRoutes.Users,
    canActivate: [authGuard],
    component: UsersComponent,
    title: $localize`Users`,
  },
  {
    path: AppRoutes.Logout,
    component: LoggedOutComponent,
    title: $localize`Logout`,
  },
  {
    path: AppRoutes.NotFound,
    component: PageNotFoundComponent,
    title: $localize`Page not found`,
  },
];
