export interface MoviesType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number | any;
  vote_count: number;
}

export interface GenresType {
  id: number;
  name: string;
}

export interface CreditsType {
  profile_path: string;
  name: string;
}
