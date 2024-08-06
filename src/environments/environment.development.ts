export const environment = {
  production: false,
  keycloak: {
    authority: 'http://localhost',
    redirectUri: 'http://localhost:4200',
    postLogoutRedirectUri: 'http://localhost:4200/app/logout',
    realm: 'TestRealm',
    clientId: 'public',
  },
  idleConfig: { idle: 10, timeout: 120, ping: 10 },
};
