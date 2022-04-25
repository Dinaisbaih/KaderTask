import {AppDispatch} from '../..';
import {Api} from '../../../Services';
import {
  SET_CREDITS_MOVIES,
  SET_GENRES_MOVIES,
  SET_POPULAR_MOVIES,
  SET_TOP_RATED_MOVIES,
  SET_UPCOMING_MOVIES,
} from '../ActionTypes';
import {FinishLoading, StartLoading} from '../Configs/ConfigActions';

export const GetUpcomingConfigAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(StartLoading());
    const {data} = await Api.getUpcomingConfigCall();
    dispatch({
      type: SET_UPCOMING_MOVIES,
      payload: data?.results,
    });
  } catch (error) {
    console.log(error);
    dispatch(FinishLoading());
  } finally {
    dispatch(FinishLoading());
  }
};

export const GetPopularConfigAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(StartLoading());
    const {data} = await Api.getPopularConfigCall();
    dispatch({
      type: SET_POPULAR_MOVIES,
      payload: data?.results,
    });
  } catch (error) {
    console.log(error);
    dispatch(FinishLoading());
  } finally {
    dispatch(FinishLoading());
  }
};

export const GetTopRatedConfigAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(StartLoading());
    const {data} = await Api.getTopRatedConfigCall();
    dispatch({
      type: SET_TOP_RATED_MOVIES,
      payload: data?.results,
    });
  } catch (error) {
    console.log(error);
    dispatch(FinishLoading());
  } finally {
    dispatch(FinishLoading());
  }
};

export const GetGenresAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(StartLoading());
    const {data} = await Api.getGenresCall();

    dispatch({
      type: SET_GENRES_MOVIES,
      payload: data?.genres,
    });
  } catch (error) {
    console.log(error);
    dispatch(FinishLoading());
  } finally {
    dispatch(FinishLoading());
  }
};

export const GetCreditsAction =
  (movieId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(StartLoading());
      const {data} = (await Api.getCreditsCall(
        movieId,
      )) as unknown as ResponseType_;
      dispatch({
        type: SET_CREDITS_MOVIES,
        payload: data?.cast,
      });
    } catch (error) {
      dispatch(FinishLoading());
    } finally {
      dispatch(FinishLoading());
    }
  };
