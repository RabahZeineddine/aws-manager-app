import React, { useEffect } from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Grid,
  SvgIcon,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
  Apps as ResourcesIcon,
  ExpandLess,
  ExpandMore,
} from "@material-ui/icons";
import style from "./style";
import { useHistory, useLocation, useParams } from "react-router";
import Dashboard from "../Dashboard/index";
import Settings from "../Settings/index";
import { ReactComponent as SQSIcon } from "../../assets/icons/SQS.svg";
import SQS from "../Resources/SQS/index";
import { MAP_TABS_TITLE } from "../Home/home.model";
import RouterBreadcrumbs from "../../components/RouterBreadcrumbs/index";

const useStyles = makeStyles(style);

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openResources, setOpenResources] = React.useState(false);
  const [tab, setTab] = React.useState("");
  const [title, setTitle] = React.useState("AWS Manager");
  const history = useHistory();
  const params: any = useParams();
  const location = useLocation();

  const handleTabChange = (val: string = "dashboard") => {
    handlePageRoute(val);
    setTab(val);
    setTitle(MAP_TABS_TITLE[val] || val);
  };

  const handlePageRoute = (val: string, key?: string) => {
    let route = `/${val}`;
    if (key) route += `/${key}`;
    history.push(route);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleResourcesClick = () => {
    setOpenResources(!openResources);
  };

  const loadPage = () => {
    const page = params.page || "dashboard";
    setTab(page);
    setTitle(MAP_TABS_TITLE[page] || page);
  };

  useEffect(() => {
    loadPage();
  }, []);

  useEffect(() => {
    loadPage();
  }, [location]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => handleTabChange("dashboard")}
            selected={tab === "dashboard"}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
        </List>
        <ListItem button onClick={handleResourcesClick}>
          <ListItemIcon>
            <ResourcesIcon />
          </ListItemIcon>
          <ListItemText primary="Resources" />
          {openResources ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open && openResources} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={() => handleTabChange("sqs")}
              selected={tab === "sqs"}
            >
              <ListItemIcon>
                <SvgIcon component={SQSIcon} viewBox="0 0 80 80" />
              </ListItemIcon>
              <ListItemText primary="SQS" />
            </ListItem>
          </List>
        </Collapse>

        <Divider />
        <List>
          <ListItem
            button
            onClick={() => handleTabChange("settings")}
            selected={tab === "settings"}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={2}>
          <RouterBreadcrumbs breadcrumbNameMap={MAP_TABS_TITLE} />
          {tab === "dashboard" && <Dashboard />}
          {tab === "sqs" && <SQS />}
          {tab === "settings" && <Settings />}
        </Grid>
      </main>
    </div>
  );
}
