import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { getLocalStorage } from '../utils/platform.utils';

/**
 * JwtInterceptor
 * Attaches JWT bearer token from localStorage to outbound HTTP requests.
 */
export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const ls = getLocalStorage();
  const token = ls ? ls.getItem('access_token') : null;
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }
  return next(req);
};
