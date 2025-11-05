import { inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

/**
 * Utility helpers to safely access browser-only APIs like localStorage in SSR contexts.
 */

// PUBLIC_INTERFACE
export function isBrowser(): boolean {
  const platformId = inject(PLATFORM_ID);
  return isPlatformBrowser(platformId);
}

// PUBLIC_INTERFACE
export function getLocalStorage(): any | null {
  // Guard for SSR where window/localStorage are not available
  try {
    const w: any = (typeof globalThis !== 'undefined') ? (globalThis as any) : undefined;
    if (isBrowser() && w && w.localStorage) {
      return w.localStorage as any;
    }
  } catch {
    // ignore
  }
  return null;
}
