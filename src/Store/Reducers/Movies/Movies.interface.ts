import {GenresType, MoviesType, CreditsType} from '../../../../Types';

export interface MoviesReducer {
  upcomingMovies: MoviesType[];
  popularMovies: MoviesType[];
  topRatedMovies: MoviesType[];
  genres: GenresType[];
  credits: CreditsType[];
}
