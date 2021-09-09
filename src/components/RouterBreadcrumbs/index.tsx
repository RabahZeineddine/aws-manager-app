/* eslint-disable no-nested-ternary */
import React from "react";
import Link, { LinkProps } from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { useLocation } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { RouterBreadcrumbsProps } from "../../config/@types/components/RouterBreadcrumbs/index";
import { Grid } from "@material-ui/core";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

function RouterBreadcrumbs(props: RouterBreadcrumbsProps) {
  const { breadcrumbNameMap } = props;
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <Grid item xs={12}>
      <Breadcrumbs aria-label="breadcrumb">
        <LinkRouter color="inherit" to="/">
          Home
        </LinkRouter>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const page = pathnames.slice(0, index + 1).join("/");
          const to = `/${page}`;
          return last ? (
            <Typography color="textPrimary" key={to}>
              {breadcrumbNameMap[value] || value}
            </Typography>
          ) : (
            <LinkRouter color="inherit" to={to} key={to}>
              {breadcrumbNameMap[value] || value}
            </LinkRouter>
          );
        })}
      </Breadcrumbs>
    </Grid>
  );
}

export default RouterBreadcrumbs;
