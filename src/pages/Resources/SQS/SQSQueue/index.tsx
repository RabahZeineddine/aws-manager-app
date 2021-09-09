import React, { useEffect, Fragment } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import { useLazyGetSQSQueueAttributesQuery } from "services/SQS";
import { SQSQueueProps } from "../../../../config/@types/components/SQS/SQSQueue/index";

function SQSQueue(props: SQSQueueProps) {
  const [fetch, result, lastPromiseInfo] = useLazyGetSQSQueueAttributesQuery();

  useEffect(() => {
    if (props.queueName) fetch({ queueName: props.queueName });
  }, []);

  return (
    <Grid item xs={12} container spacing={2}>
      <Card style={{ width: "100%" }}>
        <CardHeader title="Details" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Attribute Key
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Attribute Value
              </Typography>
            </Grid>

            {result.data &&
              Object.keys(result.data).map((key: string, index: number) => (
                <Fragment>
                  <Grid item xs={6}>
                    {key}
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ wordWrap: "break-word" }}
                    >
                      {result.data?.[key]}
                    </Typography>
                  </Grid>
                </Fragment>
              ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default SQSQueue;
