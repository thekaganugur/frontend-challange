import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import { Entries } from '../../models';
import { getData } from '../../services/services';

interface MoviesState {
  movies: Entries[];
  loading: boolean;
  error: string | null;
}

interface MoviesLoaded {
  movies: Entries[];
}

const initialState: MoviesState = {
  movies: [
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

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMoviesStart(state) {
      state.loading = true;
      state.error = null;
    },
    getMoviesSuccess(state, action: PayloadAction<MoviesLoaded>) {
      state.movies = action.payload.movies;
      state.loading = false;
      state.error = null;
    },
    getMoviesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
} = movies.actions;
export default movies.reducer;

export const fetchMovies = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getMoviesStart());
    const movies = await getData('movie');
    dispatch(getMoviesSuccess({ movies }));
  } catch (err) {
    dispatch(getMoviesFailure(err));
  }
};
