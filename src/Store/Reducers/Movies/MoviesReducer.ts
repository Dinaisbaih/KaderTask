import {RootState} from '../..';
import {CreditsType, GenresType, MoviesType} from '../../../../Types';
import {
  SET_CREDITS_MOVIES,
  SET_GENRES_MOVIES,
  SET_POPULAR_MOVIES,
  SET_TOP_RATED_MOVIES,
  SET_UPCOMING_MOVIES,
} from '../../Actions/ActionTypes';
import {ActionTypes} from '../../Types';
import {MoviesReducer} from './Movies.interface';

const initialState = {
  upcomingMovies: [] as MoviesType[],
  popularMovies: [] as MoviesType[],
  topRatedMovies: [] as MoviesType[],
  genres: [] as GenresType[],
  credits: [] as CreditsType[],
} as MoviesReducer;

export default (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    case SET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case SET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    case SET_GENRES_MOVIES:
      return {
        ...state,
        genres: action.payload,
      };
    case SET_CREDITS_MOVIES:
      return {
        ...state,
        credits: action.payload,
      };
    default:
      return state;
  }
};

export const selectUpcomingMovies = (state: RootState) =>
  state.MoviesReducer.upcomingMovies;

export const selectPopularMovies = (state: RootState) =>
  state.MoviesReducer.popularMovies;

export const selectTopRatedMovies = (state: RootState) =>
  state.MoviesReducer.topRatedMovies;

export const selectGenresMovies = (state: RootState) =>
  state.MoviesReducer.genres;

export const selectCredits = (state: RootState) => state.MoviesReducer.credits;
