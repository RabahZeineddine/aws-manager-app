import React from "react";

import { Skeleton } from "@material-ui/lab";
import { Grid } from "@material-ui/core";

type CardSkeletonProps = {
  spacing: number;
  height?: number;
};

function CardSkeleton(props: CardSkeletonProps) {
  return (
    <Grid item xs={12}>
      <Skeleton
        animation="wave"
        height={props.height || 200}
        style={{
          margin: `-${props.spacing * 8}px 0`,
        }}
      />
    </Grid>
  );
}

export default CardSkeleton;
