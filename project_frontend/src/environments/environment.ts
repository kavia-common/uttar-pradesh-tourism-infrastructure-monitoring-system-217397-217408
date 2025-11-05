export const environment = {
  production: false,
  // PUBLIC_INTERFACE
  /**
   * Base URL for backend API calls in development.
   * Ensure this is set correctly per environment (.env or deployment).
   */
  apiBaseUrl: 'http://localhost:8080/api',
  // Optional map config example placeholder
  maps: {
    provider: 'leaflet',
    apiKey: ''
  }
};
