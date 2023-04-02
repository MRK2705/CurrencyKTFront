import { KeycloakService } from "keycloak-angular";
import {environment} from "../../environments/environment";

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.URL_KEYCLOAK,
        realm: 'software',
        clientId: 'frontend'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      }
    });
}
