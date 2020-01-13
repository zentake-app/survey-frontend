import React from "react";
import { AuthenticationAPI } from "../repositories/authentication";

export const AuthenticationContext = React.createContext(
  new AuthenticationAPI()
);
