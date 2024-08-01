export const environment = {
  production: false,
  keycloak: {
    authority: 'http://localhost:8080',
    redirectUri: 'http://localhost:4200',
    postLogoutRedirectUri: 'http://localhost:4200/logout',
    realm: 'Pretius-Keycloak-FE-Integration',
    clientId: 'keycloak-angular-integration-tutorial',
  },
  idleConfig: { idle: 10, timeout: 60, ping: 10 },
};
