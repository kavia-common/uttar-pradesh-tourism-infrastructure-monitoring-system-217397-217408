import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { getLocalStorage } from '../utils/platform.utils';

// PUBLIC_INTERFACE
/**
 * AuthService
 * Manages authentication state, token storage, and (stub) token refresh logic.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';
  private isAuthenticated$ = new BehaviorSubject<boolean>(this.hasToken());
  private roles$ = new BehaviorSubject<string[]>([]);

  private router = inject(Router);

  /** Observable to track authentication status */
  authStatus(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  /** Observable to track current user roles */
  userRoles(): Observable<string[]> {
    return this.roles$.asObservable();
  }

  /** Returns current access token from storage if present */
  getToken(): string | null {
    const ls = getLocalStorage();
    return ls ? ls.getItem(this.TOKEN_KEY) : null;
  }

  /** Returns current refresh token from storage if present */
  getRefreshToken(): string | null {
    const ls = getLocalStorage();
    return ls ? ls.getItem(this.REFRESH_TOKEN_KEY) : null;
  }

  /** Stores access and refresh tokens and updates auth state */
  setSession(accessToken: string, refreshToken?: string, roles?: string[]) {
    const ls = getLocalStorage();
    if (ls) {
      ls.setItem(this.TOKEN_KEY, accessToken);
      if (refreshToken) {
        ls.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
      }
    }
    if (roles) {
      this.roles$.next(roles);
    }
    this.isAuthenticated$.next(true);
  }

  /** Clears tokens and updates auth state */
  logout(redirectTo: string = '/auth/login') {
    const ls = getLocalStorage();
    if (ls) {
      ls.removeItem(this.TOKEN_KEY);
      ls.removeItem(this.REFRESH_TOKEN_KEY);
    }
    this.roles$.next([]);
    this.isAuthenticated$.next(false);
    this.router.navigateByUrl(redirectTo);
  }

  /** Returns true if an access token is present */
  private hasToken(): boolean {
    const ls = getLocalStorage();
    return !!(ls && ls.getItem(this.TOKEN_KEY));
  }

  // PUBLIC_INTERFACE
  /**
   * Attempts to refresh the access token using the refresh token.
   * Replace stub with real API call.
   */
  refreshToken(): Observable<{ accessToken: string } | null> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return of(null);
    }
    // TODO: Replace with API call to refresh endpoint.
    // Returning null to indicate no refresh performed in stub.
    return of(null);
  }

  /** Updates roles for current user (stub: replace when integrating backend) */
  setRoles(roles: string[]) {
    this.roles$.next(roles);
  }
}
