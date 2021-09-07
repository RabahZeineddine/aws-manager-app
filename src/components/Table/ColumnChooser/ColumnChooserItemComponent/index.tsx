import React from "react";

import { ColumnChooser } from "@devexpress/dx-react-grid-material-ui";
import { FormControlLabel, Checkbox } from "@material-ui/core";

function ColumnChooserItemComponent(props: ColumnChooser.ItemProps) {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={!props.item.hidden}
            name={props.item.column.title}
            color="primary"
            onChange={props.onToggle}
          />
        }
        label={props.item.column.title}
      />
    </div>
  );
}

export default ColumnChooserItemComponent;
