import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import env from '../../config/env/index';


// Define a service using a base URL and expected endpoints
export const snsApi = createApi({
    reducerPath: 'snsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${env.API}/sns` }),
    endpoints: (builder) => ({
        getSNSTopics: builder.query<Array<string>, void>({
            query: () => `topics`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSNSTopicsQuery } = snsApi