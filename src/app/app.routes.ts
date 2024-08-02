import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/app' },
  {
    path: 'app',
    loadChildren: () =>
      import('./pages/welcome/welcome.routes').then((m) => m.APP_ROUTES),
  },
];
