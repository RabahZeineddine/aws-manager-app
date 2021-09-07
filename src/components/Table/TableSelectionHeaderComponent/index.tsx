import React from "react";

import { TableSelection } from "@devexpress/dx-react-grid-material-ui";
import { Checkbox } from "@material-ui/core";

function TableSelectionHeaderComponent(props: TableSelection.HeaderCellProps) {
  return (
    <th colSpan={props.colSpan} rowSpan={props.rowSpan}>
      <td>
        <Checkbox
          color="primary"
          checked={props.allSelected}
          onClick={() => props.onToggle()}
          indeterminate={props.someSelected}
        />
      </td>
    </th>
  );
}

export default TableSelectionHeaderComponent;
