import React from "react";
import { ZuluNavigationItem } from "../../zulu-ui/organisms/Sidebar";
import Dashboard from "@material-ui/icons/Dashboard";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import Ballot from "@material-ui/icons/Ballot";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import Build from "@material-ui/icons/Build";

class NavigationItems {
  public static forUser(user: {}): ZuluNavigationItem[] {
    return [
      {
        icon: <Dashboard />,
        label: "Dashboard",
        value: "/dashboard"
      },
      {
        label: "Survey Management",
        value: "/survey_management",
        icon: <Ballot />
      },
      {
        icon: <PeopleAlt />,
        label: "Patients",
        value: "/patient_management"
      },
      {
        icon: <Build />,
        label: "Administration",
        value: "/admin"
      },
      {
        icon: <PowerSettingsNew />,
        label: "Log Out",
        value: "/logout",
      }
    ]
  }
}

export default NavigationItems;
