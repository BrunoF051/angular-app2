import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { DataTableComponent } from '../../components/data-table/data-table.component';

export const WELCOME_ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'table', component: DataTableComponent },
  { path: '**', component: PageNotFoundComponent },
];
