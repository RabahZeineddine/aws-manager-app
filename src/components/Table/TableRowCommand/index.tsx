import React from "react";

import { TableEditColumn } from "@devexpress/dx-react-grid-material-ui";
import { DeleteOutlineRounded } from "@material-ui/icons";
import { Button, ThemeProvider } from "@material-ui/core";
import ErrorTheme from "config/themes/error";

function TableRowCommand(props: TableEditColumn.CommandProps) {
  return (
    <div>
      {props.id === "delete" && (
        <Button onClick={props.onExecute}>
          <ThemeProvider theme={ErrorTheme}>
            <DeleteOutlineRounded color="primary" />
          </ThemeProvider>
        </Button>
      )}
    </div>
  );
}

export default TableRowCommand;
