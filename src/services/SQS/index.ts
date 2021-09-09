import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import env from '../../config/env/index';
import { SQSQueue, SQSQueueAttributes, SQSQueueAttributesArgs } from '../../config/@types/services/SQS/index';


// Define a service using a base URL and expected endpoints
export const sqsApi = createApi({
    reducerPath: 'sqsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${env.API}/sqs` }),
    endpoints: (builder) => ({
        getSQSQueues: builder.query<Array<SQSQueue>, void>({
            query: () => `queues`,
        }),
        getSQSQueueAttributes: builder.query<SQSQueueAttributes, SQSQueueAttributesArgs>({
            query: (args) => `queues/${args.queueName}/attributes`,
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetSQSQueuesQuery,
    useLazyGetSQSQueueAttributesQuery
} = sqsApi