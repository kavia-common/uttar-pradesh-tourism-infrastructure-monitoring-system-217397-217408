import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { getLocalStorage } from '../utils/platform.utils';

// PUBLIC_INTERFACE
/**
 * AuthGuard
 * Prevents access to routes unless the user is authenticated.
 */
export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const ls = getLocalStorage();
  const token = ls ? ls.getItem('access_token') : null;
  if (token) {
    return true;
  }
  return router.parseUrl('/auth/login') as UrlTree;
};
