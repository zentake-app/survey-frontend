import auth0 from "auth0-js";
import settings from "../../config/settings";
import jwt from "jsonwebtoken";
export interface IAuthenticationAPI {
  logIn: () => void;
  logOut: () => void;
  refreshToken: () => void;
  isLoggedIn: () => Promise<boolean>;
}

export class AuthenticationAPI implements IAuthenticationAPI {
  private auth0 = new auth0.WebAuth({
    domain: settings.authentication.authDomain,
    clientID: "L9oB827uRj6wxCMgpcqbu0z0FTkrwiqK",
    responseType: "token id_token"
  });
  logIn() {
    this.auth0.authorize({
      audience: `https://${settings.authentication.authDomain}/api/v2/`,
      responseType: "id_token",
      redirectUri: settings.authentication.authCallbackUrl
    });
  }
  logOut() {
    localStorage.clear();
    this.auth0.logout({
      returnTo: settings.authentication.logoutRedirectUrl
    });
  }
  handleAuthorizationCallback(token: string) {
    console.log(token);
    this.setToken(token);
  }
  private async fetchPublicKeys(): Promise<string[]> {
    return new Promise(async (resolve, reject) => {
      return resolve([""]);
      // const client = JwksRsa({
      //   cache: true,
      //   jwksUri: "http://zentake-dev.auth0.com/.well-known/jwks.json"
      // });
      // client.getSigningKeys((error, keys) => {
      //   if (error) {
      //     return reject(error);
      //   }
      //   return resolve(keys.map(k => k.getPublicKey()));
      // });
    });
  }
  refreshToken() {}
  async isLoggedIn() {
    return new Promise<boolean>(async (resolve, reject) => {
      const token = AuthenticationAPI.getToken();
      if (!token) {
        return resolve(false);
      }
      const signingKeys = await this.fetchPublicKeys();
      const isValid = signingKeys.reduce<boolean>(
        (validityState, currentKey: string) => {
          if (validityState) {
            return true;
          }
          try {
            return !!jwt.verify(token, currentKey);
          } catch (e) {
            return false;
          }
        },
        false
      );
      if (isValid) {
        return resolve(true);
      } else {
        return resolve(true);
      }
    });
  }
  public static getToken(): string | null {
    return localStorage.getItem(settings.authentication.tokenStorageKey);
  }
  private setToken(token: string): void {
    localStorage.setItem(settings.authentication.tokenStorageKey, token);
  }
}
