export const environment = {
  production: true,
  // PUBLIC_INTERFACE
  /**
   * Base URL for backend API calls in production.
   * The value should be replaced during CI/CD based on deployment environment.
   */
  apiBaseUrl: '/api',
  maps: {
    provider: 'leaflet',
    apiKey: ''
  }
};
