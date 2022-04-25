import React, {useCallback, useEffect} from 'react';
import {FlatList, ListRenderItem, ScrollView} from 'react-native';

//Styles
import {
  MainContainer,
  TopView,
  MovieImage,
  MovieTitle,
  MovieRate,
  OverViewTitle,
  OverViewDescription,
  GenresWrapper,
  GenresTitle,
  OverViewWrapper,
  CreditsWrapper,
  CreditsTitle,
} from './styles';

//Components
import CustomHeader from '../../Components/CustomHeader';
import GenresCard from '../../Components/GenresCard';
import CreditsCard from '../../Components/CreditsCard';

//Store
import {
  GetCreditsAction,
  GetGenresAction,
} from '../../Store/Actions/MoviesAction';
import {
  selectCredits,
  selectGenresMovies,
} from '../../Store/Reducers/Movies/MoviesReducer';
import {useAppSelector} from '../../Store';

//React-Redux
import {useDispatch} from 'react-redux';

//Types
import {CreditsType, GenresType} from '../../../Types';
import {RootStackParamList} from '../../Navigations';
import {RouteProp} from '@react-navigation/native';

type MovieDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MovieDetails'
>;

export interface MovieDetailsProps {
  route: MovieDetailsScreenRouteProp;
}
const MovieDetails = ({route}: MovieDetailsProps) => {
  const {movie} = route?.params;
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
  const dispatch = useDispatch();

  const getCredits = useCallback(() => {
    dispatch(GetCreditsAction(movie.id));
  }, [dispatch, movie.id]);

  const getGenres = useCallback(() => {
    dispatch(GetGenresAction());
  }, [dispatch]);

  const credits = useAppSelector(selectCredits);
  const genres = useAppSelector(selectGenresMovies);

  useEffect(() => {
    getCredits();
    getGenres();
  }, [getCredits, getGenres]);

  const renderItem: ListRenderItem<GenresType> | null | undefined = ({
    item,
  }) => {
    const genre_id = movie.genre_ids?.find(id => {
      return id === item.id;
    });
    if (genre_id === item.id) {
      return <GenresCard genre={item} />;
    }
  };

  const creditsRenderItem: ListRenderItem<CreditsType> | null | undefined = ({
    item,
  }) => {
    return <CreditsCard credit={item} />;
  };

  return (
    <MainContainer>
      <CustomHeader backIcon />
      <ScrollView>
        <TopView>
          <MovieImage
            source={{
              uri: `${IMAGE_URL}${movie?.poster_path}`,
            }}
          />
          <MovieTitle>{movie?.title}</MovieTitle>
          <MovieRate>{movie?.vote_average * 10}%</MovieRate>
        </TopView>
        <OverViewWrapper>
          <OverViewTitle>OverView</OverViewTitle>
          <OverViewDescription>{movie?.overview}</OverViewDescription>
        </OverViewWrapper>
        <GenresWrapper>
          <GenresTitle>Genres</GenresTitle>
          <FlatList
            scrollEnabled={true}
            data={genres}
            renderItem={renderItem}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{paddingTop: 5}}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </GenresWrapper>
        <CreditsWrapper>
          <CreditsTitle>Credits</CreditsTitle>
          <FlatList
            scrollEnabled={true}
            data={credits}
            renderItem={creditsRenderItem}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{paddingTop: 10, marginBottom: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </CreditsWrapper>
      </ScrollView>
    </MainContainer>
  );
};

export default MovieDetails;
