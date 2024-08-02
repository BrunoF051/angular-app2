import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthorizationService } from 'app/services/authorization.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authorizationService = inject(AuthorizationService);
  if (authorizationService.isLoggedIn()) {
    return true;
  }
  authorizationService.redirectToLoginPage();
  return false;
};
