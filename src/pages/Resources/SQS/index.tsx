import React from "react";
import { Grid } from "@material-ui/core";
import Table from "../../../components/Table/index";
import { sqsTableColumns } from "./sqs.model";
import { useGetSQSQueuesQuery } from "services/SQS";

function SQS() {
  const { isFetching, data, refetch } = useGetSQSQueuesQuery();

  return (
    <Grid item xs={12} container spacing={2}>
      <Grid item xs={12}>
        <Table
          loading={isFetching}
          columns={sqsTableColumns}
          rows={data ? data : []}
          onRefresh={refetch}
        />
      </Grid>
    </Grid>
  );
}

export default SQS;
