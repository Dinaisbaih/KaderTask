import AppService from '../restService';

const apiUrl = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=6aee7a4aafc9a800ddc88b535a738819';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmFiMjc3ODJkNDVkZGM1YmFiNWNjYzc4NTVhNjc5MiIsInN1YiI6IjYwOWE3MDNmNDFlZWUxMDAzZGRhMWVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hke_sLN51MJGlUQ45I9mrKODyLW0TwAtB2ZC_XeqOEI';

export const getUpcomingConfigCall = () => {
  const url = `${apiUrl}/movie/upcoming?${API_KEY}&language=en-US&page=1`;
  return AppService({
    url,
    method: 'GET',
    authToken: token,
  });
};

export const getPopularConfigCall = () => {
  const url = `${apiUrl}/movie/popular?${API_KEY}&language=en-US&page=1`;
  return AppService({
    url,
    method: 'GET',
    authToken: token,
  });
};

export const getTopRatedConfigCall = () => {
  const url = `${apiUrl}/movie/top_rated?${API_KEY}&language=en-US&page=1`;
  return AppService({
    url,
    method: 'GET',
    authToken: token,
  });
};

export const getGenresCall = () => {
  const url = `${apiUrl}/genre/movie/list?${API_KEY}&language=en-US`;

  return AppService({
    url,
    method: 'GET',
    authToken: token,
  });
};

export const getCreditsCall = (payload: number) => {
  const url = `${apiUrl}/movie/${payload}/credits?${API_KEY}&language=en-US`;

  return AppService({
    url,
    method: 'GET',
    authToken: token,
  });
};
