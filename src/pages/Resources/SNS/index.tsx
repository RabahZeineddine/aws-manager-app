import React from "react";
import { Grid } from "@material-ui/core";
import Table from "../../../components/Table/index";
import { snsTableColumns } from "./sns.model";
import { useGetSNSTopicsQuery } from "services/SNS";

function SNS() {
  const { isFetching, data, refetch } = useGetSNSTopicsQuery();

  return (
    <Grid item xs={12} container spacing={2}>
      <Grid item xs={12}>
        <Table
          loading={isFetching}
          columns={snsTableColumns}
          rows={data ? data : []}
          onRefresh={refetch}
        />
      </Grid>
    </Grid>
  );
}

export default SNS;
