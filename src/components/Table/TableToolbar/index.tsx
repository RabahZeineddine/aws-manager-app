import React from "react";
import style from "./style";
import { makeStyles } from "@material-ui/core";
import { Toolbar } from "@devexpress/dx-react-grid-material-ui";
import ToggleButton from "@material-ui/lab/ToggleButton";
import {
  FilterListRounded,
  AddCircleOutline,
  RefreshOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles(style);

type TableToolbarProps = Toolbar.RootProps | any;

function TableToolbar(props: TableToolbarProps) {
  const { filtersToggle, setFiltersToggle, ...rest } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar.Root
        {...rest}
        children={
          <React.Fragment>
            {props.children}
            {props.onAdd && (
              <ToggleButton
                value="Add"
                size="small"
                classes={{ root: classes.toggleRoundButton }}
                onClick={props.onAdd ? props.onAdd : () => {}}
              >
                <AddCircleOutline />
              </ToggleButton>
            )}
            <ToggleButton
              onClick={() => setFiltersToggle(!filtersToggle)}
              value="Filter"
              selected={filtersToggle}
              classes={{ root: classes.toggleRoundButton }}
              size="small"
            >
              <FilterListRounded />
            </ToggleButton>
            {props.onRefresh && (
              <ToggleButton
                value="Refresh"
                size="small"
                classes={{ root: classes.toggleRoundButton }}
                onClick={props.onRefresh ? props.onRefresh : () => {}}
              >
                <RefreshOutlined />
              </ToggleButton>
            )}
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
}

export default TableToolbar;
