import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/app' },
  {
    path: 'app',
    /*
    This set the routes for Lazy loading
    you can find the routes in /pages/welcome/welcome.routes
    */
    loadChildren: () =>
      import('./pages/welcome/welcome.routes').then((m) => m.APP_ROUTES),
  },
];
