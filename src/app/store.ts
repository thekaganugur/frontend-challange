import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import seriesReducer from '../features/series/seriesSlice';

export const store = configureStore({
  reducer: {
    series: seriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
