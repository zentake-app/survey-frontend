import auth0 from "auth0-js";
import settings from "../../config/settings";

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
  refreshToken() {}
  async isLoggedIn() {
    return new Promise<boolean>((resolve, reject) => {
      const token = AuthenticationAPI.getToken();
      if (!token) {
        return resolve(false);
      } else {
        return resolve(true);
      }
      // this.auth0.checkSession({ prompt: "none" }, (error: any, result: any) => {
      //   if (!error) {
      //     return resolve(true);
      //   }
      //   return resolve();
      // });
    });
  }
  public static getToken(): string | null {
    return localStorage.getItem(settings.authentication.tokenStorageKey);
  }
  private setToken(token: string): void {
    localStorage.setItem(settings.authentication.tokenStorageKey, token);
  }
}
