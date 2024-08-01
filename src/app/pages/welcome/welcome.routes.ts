import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { UsersComponent } from '../users/users.component';

export const APP_ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent },
];
