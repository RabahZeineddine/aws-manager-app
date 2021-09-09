import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { snsApi } from 'services/SNS';

import { sqsApi } from '../../services/SQS/index';
import errorSlice from './slices/error';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [sqsApi.reducerPath]: sqsApi.reducer,
    [snsApi.reducerPath]: snsApi.reducer,
    error: errorSlice.reducer
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(sqsApi.middleware)
      .concat(snsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
