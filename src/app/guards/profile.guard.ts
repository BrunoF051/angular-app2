import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthorizationService } from 'app/services/authorization.service';
import { Router } from '@angular/router';

export const profileGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authorizationService = inject(AuthorizationService);
  const username = authorizationService.getUserName();
  const routeName = route.paramMap.get('username');
  const isAllow = username === routeName;
  if (!isAllow) {
    router.navigate(['/app/not-authorized']);
    return false;
  }
  return isAllow;
};
