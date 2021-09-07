import React from "react";
import { Grid } from "@material-ui/core";
import Table from "../../../components/Table/index";
import { sqsTableColumns } from "./sqs.model";

function SQS() {
  return (
    <Grid item xs={12} container spacing={2}>
      <Grid item xs={12}>
        <Table columns={sqsTableColumns} rows={[]} />
      </Grid>
    </Grid>
  );
}

export default SQS;
