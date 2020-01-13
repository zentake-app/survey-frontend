import React from "react";
import {} from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import { MainTemplate } from "../zulu-ui/templates/Main";
import navigationItems from "./common/navigationItems";
import { ZuluTable, ZuluTableHeader } from "../zulu-ui/organisms/Table";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Survey } from "../models/Survey";

export interface DashboardProps extends Partial<RouteComponentProps> {}

const getSurveys = gql`
  query Survey {
    allSurveys {
      count
      results {
        id
        name
        updatedAt
      }
    }
  }
`;

const availableSurveysHeaders: ZuluTableHeader<Survey>[] = [
  {
    display: "Survey Name",
    accessor: "name"
  },
  {
    display: "Updated At",
    accessor: "updatedAt",
    render: item => item.updatedAt.toLocaleDateString()
  }
];

const Dashboard = (args: DashboardProps) => {
  const { loading, error, data } = useQuery(getSurveys);

  return (
    <MainTemplate title="Dashboard" navigationItems={navigationItems} {...args}>
      <ZuluTable
        arialabel="Available Surveys"
        headers={availableSurveysHeaders}
        items={
          (data?.allSurveys?.results as [])?.map(survey =>
            Survey.fromNetwork(survey)
          ) || []
        }
      />
    </MainTemplate>
  );
};

export { Dashboard };
