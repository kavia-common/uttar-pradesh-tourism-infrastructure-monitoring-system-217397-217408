import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';
import { getLocalStorage } from '../utils/platform.utils';

// PUBLIC_INTERFACE
/**
 * RoleGuard
 * Validates the user has one of the required roles defined in route data: { roles: ['ADMIN', 'USER'] }
 */
export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  const requiredRoles: string[] = route.data?.['roles'] || [];

  if (!requiredRoles.length) {
    // No role requirement specified, allow
    return true;
  }

  return auth.userRoles().pipe(
    map((currentRoles) => {
      if (!currentRoles || currentRoles.length === 0) {
        // If roles are unknown, rely on token presence; could fetch roles here.
        const ls = getLocalStorage();
        const hasToken = !!(ls && ls.getItem('access_token'));
        return hasToken ? true : router.parseUrl('/auth/login');
      }
      const hasRole = currentRoles.some((r) => requiredRoles.includes(r));
      return hasRole ? true : router.parseUrl('/forbidden');
    })
  );
};
