import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import { Entries, ProgramType } from '../../models';
import { getData } from '../../services/services';

interface SeriesState {
  series: Entries[];
  loading: boolean;
  error: string | null;
}

interface SeriesLoaded {
  series: Entries[];
}

const initialState: SeriesState = {
  series: [
    {
      description: '',
      images: { 'Poster Art': { height: 0, url: '', width: 0 } },
      programType: 'movie',
      releaseYear: 0,
      title: '',
    },
  ],
  loading: false,
  error: null,
};

const series = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getSeriesStart(state) {
      state.loading = true;
      state.error = null;
    },
    getSeriesSuccess(state, action: PayloadAction<SeriesLoaded>) {
      state.series = action.payload.series;
      state.loading = false;
      state.error = null;
    },
    getSeriesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getSeriesStart,
  getSeriesSuccess,
  getSeriesFailure,
} = series.actions;
export default series.reducer;

export const fetchComments = (programType: ProgramType): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(getSeriesStart());
    const series = await getData(programType);
    dispatch(getSeriesSuccess({ series }));
  } catch (err) {
    dispatch(getSeriesFailure(err));
  }
};
