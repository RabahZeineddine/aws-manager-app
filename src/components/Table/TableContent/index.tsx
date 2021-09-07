import React, { useState } from "react";
import { TableContentType } from "../@types";

function TableContent(props: TableContentType) {
  const [value] = useState(props.row.value);
  const symbols = Object.getOwnPropertySymbols(props.row);
  const symbolKey =
    symbols.find((symbol) => symbol.toString().match("collapsedRows")) || "";
  return (
    <React.Fragment>
      {value ? (
        <React.Fragment>
          {props.column.format
            ? props.column.format(props.row.value)
            : props.row.value}
        </React.Fragment>
      ) : (
        <React.Fragment>Não identificado</React.Fragment>
      )}
      {symbolKey !== "" && (
        <React.Fragment> ({props.row[symbolKey].length})</React.Fragment>
      )}
    </React.Fragment>
  );
}

export default TableContent;
