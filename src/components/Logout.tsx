import React from "react";
import { AuthenticationAPI } from "../repositories/authentication";

export const Logout = () => {
  new AuthenticationAPI().logOut();
  return null;
};
