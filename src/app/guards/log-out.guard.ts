import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppRoutes } from 'app/pages/welcome/welcome.routes';
import { AuthorizationService } from 'app/services/authorization.service';

export const logOutGuard: CanActivateFn = (route, state) => {
  const authorizationService = inject(AuthorizationService);
  const router = inject(Router);
  if (!authorizationService.isLoggedIn()) {
    return true;
  } else {
    return router.createUrlTree([AppRoutes.Main]);
  }
};
