import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ZuluTable, ZuluTableHeader } from "./Table";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Survey } from "../../models/Survey";
export default {
  title: "Zentake Design Language|Organisms/Table",
  decorators: [withKnobs]
};

const headers: ZuluTableHeader<Survey>[] = [
  {
    display: "Survey Name",
    accessor: "name"
  },
  {
    display: "Updated At",
    accessor: "updatedAt"
  }
];

export const sidebar = () => {
  return <TableFetchingElement />;
};

const getTeams = gql`
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

const TableFetchingElement = () => {
  const { data } = useQuery(getTeams);
  console.log(data);
  return (
    <ZuluTable
      arialabel="storybook table"
      headers={headers}
      items={data ? data.allSurveys.results : []}
    />
  );
};
