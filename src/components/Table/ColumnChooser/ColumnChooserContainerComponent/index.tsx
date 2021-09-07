import React from "react";
import { ColumnChooser } from "@devexpress/dx-react-grid-material-ui";

function ColumnChooserContainerComponent(props: ColumnChooser.ContainerProps) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

export default ColumnChooserContainerComponent;
