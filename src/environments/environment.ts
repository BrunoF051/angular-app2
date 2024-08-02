export const environment = {
  production: false,
  keycloak: {
    authority: 'http://localhost',
    redirectUri: 'http://localhost:4200',
    postLogoutRedirectUri: 'http://localhost:4200/logout',
    realm: 'TestRealm',
    clientId: 'public',
  },
  idleConfig: { idle: 10, timeout: 60, ping: 10 },
};
