import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow, { TableRowProps } from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

export interface ZuluTableProps<T> {
  items: T[];
  headers: ZuluTableHeader<T>[];
  arialabel: string;
  getRowProps?: (item: T) => TableRowProps;
}

export interface ZuluTableRowProps extends TableRowProps {}

export interface ZuluTableHeader<T> {
  display: string | React.ReactNode;
  accessor: keyof T;
  render?: (item: T) => React.ReactNode;
}

function ZuluTable<T>(props: ZuluTableProps<T>) {
  return (
    <Table component={Paper}>
      <TableHead>
        <TableRow>
          {props.headers.map(item => (
            <TableCell>{item.display}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.items.map(rowItem => {
          return (
            <TableRow {...(props.getRowProps && props.getRowProps(rowItem))}>
              {props.headers.map(headerItem => (
                <TableCell>
                  {headerItem.render
                    ? headerItem.render(rowItem)
                    : rowItem[headerItem.accessor]}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export { ZuluTable };
