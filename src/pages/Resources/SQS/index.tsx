import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Table from "../../../components/Table/index";
import { sqsTableColumns } from "./sqs.model";
import { useGetSQSQueuesQuery } from "services/SQS";
import SQSQueue from "./SQSQueue/index";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router";
import { SQSQueue as ISQSQueue } from "../../../config/@types/services/SQS/index";

function SQS() {
  const { isFetching, data, refetch } = useGetSQSQueuesQuery();

  const [openQueue, setOpenQueue] = useState(false);
  const [selectedQueueName, setSelectedQueueName] = useState<string>("");

  const history = useHistory();
  const params: any = useParams();
  const match = useRouteMatch();

  const openSQSQueue = (sqsQueue: ISQSQueue) => {
    setSelectedQueueName(sqsQueue.name);
    setOpenQueue(true);
    history.push(`${match.url}/${sqsQueue.name}`);
  };

  const handleRowSelection = (
    selectedRows: Array<any>,
    setSelection: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    if (selectedRows.length === 1) {
      const sqsQueue = data?.[selectedRows[0]];
      if (sqsQueue) openSQSQueue(sqsQueue);
      setSelection([]);
    }
  };

  const loadPageBasedOnKey = () => {
    if (params.key) {
      setSelectedQueueName(params.key);
      setOpenQueue(true);
    } else {
      setSelectedQueueName("");
      setOpenQueue(false);
    }
  };

  useEffect(() => {
    loadPageBasedOnKey();
  }, [params]);

  return (
    <Grid item xs={12} container spacing={2}>
      {openQueue && selectedQueueName && (
        <SQSQueue queueName={selectedQueueName} />
      )}
      {!openQueue && (
        <Grid item xs={12}>
          <Table
            loading={isFetching}
            columns={sqsTableColumns}
            rows={data ? data : []}
            onRefresh={refetch}
            selectByRowClick
            onSelectionChange={handleRowSelection}
          />
        </Grid>
      )}
    </Grid>
  );
}

export default SQS;
