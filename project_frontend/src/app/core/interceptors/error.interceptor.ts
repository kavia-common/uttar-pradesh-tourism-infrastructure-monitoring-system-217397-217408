import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';

/**
 * ErrorInterceptor
 * Provides global error handling for HTTP responses. Logs out on 401/403 by default.
 */
export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const auth = inject(AuthService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 || error.status === 403) {
        // Attempt refresh token flow (stub), otherwise logout.
        auth.refreshToken().subscribe((res) => {
          if (!res) {
            auth.logout();
          }
        });
      }
      // Add more global handling/logging as needed.
      return throwError(() => error);
    })
  );
};
