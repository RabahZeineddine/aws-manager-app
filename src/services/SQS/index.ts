import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import env from '../../config/env/index';


// Define a service using a base URL and expected endpoints
export const sqsApi = createApi({
    reducerPath: 'sqsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${env.API}/sqs` }),
    endpoints: (builder) => ({
        getSQSQueues: builder.query<Array<string>, void>({
            query: () => `queues`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSQSQueuesQuery } = sqsApi