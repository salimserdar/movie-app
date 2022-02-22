import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { movieApi } from '../services/movie';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer
  },
    // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;