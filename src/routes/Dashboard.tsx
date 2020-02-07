import React from "react";
import { Grid, Typography, TableRowProps } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import { MainTemplate } from "../zulu-ui/templates/Main";
import NavigationItems from "./common/NavigationItems";
import { ZuluTable, ZuluTableHeader } from "../zulu-ui/organisms/Table";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Survey } from "../models/Survey";
import { Link } from "react-router-dom";

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
    <MainTemplate
      title="Dashboard"
      navigationItems={NavigationItems.forUser({})}
      {...args}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography component="h1" variant="h5">
            Available Surveys
          </Typography>
          <ZuluTable
            getRowProps={item => {
              return ({
                component: Link,
                to: `/surveys/respond/${item.id}`
              } as any) as TableRowProps;
            }}
            arialabel="Available Surveys"
            headers={availableSurveysHeaders}
            items={
              (data?.allSurveys?.results as [])?.map(survey =>
                Survey.fromNetwork(survey)
              ) || []
            }
          />
        </Grid>
        <Grid item xs={6}>
          <Typography component="h1" variant="h5">
            Pending Surveys
          </Typography>
          <ZuluTable
            arialabel="Pending Surveys"
            headers={availableSurveysHeaders}
            items={[]}
          />
        </Grid>
      </Grid>
    </MainTemplate>
  );
};

export { Dashboard };
