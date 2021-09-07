import React from "react";

import { TableSelection } from "@devexpress/dx-react-grid-material-ui";
import { Checkbox } from "@material-ui/core";

function TableSelectionCellComponent(props: TableSelection.CellProps) {
  return (
    <td colSpan={props.colSpan} rowSpan={props.rowSpan}>
      <Checkbox checked={props.selected} color="primary" />
    </td>
  );
}

export default TableSelectionCellComponent;
