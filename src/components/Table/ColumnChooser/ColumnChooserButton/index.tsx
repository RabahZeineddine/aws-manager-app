import React from "react";

import { ColumnChooser } from "@devexpress/dx-react-grid-material-ui";
import { makeStyles } from "@material-ui/styles";

import { ToggleButton } from "@material-ui/lab";
import { VisibilityRounded, VisibilityOffRounded } from "@material-ui/icons";
import style from "../../TableToolbar/style";

const useStyles = makeStyles(style);

function ColumnChooserButton(props: ColumnChooser.ToggleButtonProps) {
  const classes = useStyles();

  return (
    <ToggleButton
      onClick={props.onToggle}
      classes={{ root: classes.toggleRoundButton }}
      size="small"
      ref={props.buttonRef as any}
    >
      {props.active ? <VisibilityOffRounded /> : <VisibilityRounded />}
    </ToggleButton>
  );
}

export default ColumnChooserButton;
