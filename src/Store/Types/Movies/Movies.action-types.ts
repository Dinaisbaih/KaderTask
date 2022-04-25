import {
  FINISH_LOADING,
  SET_CREDITS_MOVIES,
  SET_GENRES_MOVIES,
  SET_POPULAR_MOVIES,
  SET_TOP_RATED_MOVIES,
  SET_UPCOMING_MOVIES,
  START_LOADING,
} from '../../Actions/ActionTypes';

interface StartLoading {
  type: typeof START_LOADING;
}

interface FinishLoading {
  type: typeof FINISH_LOADING;
}

interface SetUpcomingMovies {
  type: typeof SET_UPCOMING_MOVIES;
  payload: any;
}

interface SetPopularMovies {
  type: typeof SET_POPULAR_MOVIES;
  payload: any;
}

interface SetTopRatedMovies {
  type: typeof SET_TOP_RATED_MOVIES;
  payload: any;
}

interface SetGenresMovies {
  type: typeof SET_GENRES_MOVIES;
  payload: any;
}

interface SetCreditsMovies {
  type: typeof SET_CREDITS_MOVIES;
  payload: any;
}
export type MoviesActionTypes =
  | FinishLoading
  | StartLoading
  | SetUpcomingMovies
  | SetPopularMovies
  | SetTopRatedMovies
  | SetGenresMovies
  | SetCreditsMovies;
