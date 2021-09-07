import React from "react";

import { ColumnChooser } from "@devexpress/dx-react-grid-material-ui";
import { Menu } from "@material-ui/core";

function ColumnChooserOverlayComponent(props: ColumnChooser.OverlayProps) {
  return (
    <Menu
      id="Column-chooser-overlay"
      keepMounted={false}
      anchorEl={props.target as Element}
      open={props.visible}
      onClose={props.onHide}
      onClick={() => {}}
    >
      {props.children}
    </Menu>
  );
}

export default ColumnChooserOverlayComponent;
