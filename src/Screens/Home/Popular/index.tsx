import {FlatList, ListRenderItem} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {MainContainer} from './styles';
import {useDispatch} from 'react-redux';
import {GetPopularConfigAction} from '../../../Store/Actions/MoviesAction';
import {selectPopularMovies} from '../../../Store/Reducers/Movies/MoviesReducer';
import {useAppSelector} from '../../../Store';
import {MoviesType} from '../../../../Types';
import MovieCard from '../../../Components/MovieCard';
import {CompositeNavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../Navigations';
import {StackNavigationProp} from '@react-navigation/stack';

export type PopularScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList, 'MovieDetails'>
>;

interface Props {
  navigation: PopularScreenNavigationProp;
}
const Popular: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const {navigate} = navigation;

  const getMovies = useCallback(() => {
    dispatch(GetPopularConfigAction());
  }, [dispatch]);

  const popularMovies = useAppSelector(selectPopularMovies);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const navigateToDetails = (item: MoviesType) => {
    navigate('MovieDetails', {movie: item});
  };

  const renderItem: ListRenderItem<MoviesType> | null | undefined = ({
    item,
  }) => {
    return (
      <MovieCard
        movie={item}
        genre_ids={item?.genre_ids}
        onPress={() => navigateToDetails(item)}
      />
    );
  };
  return (
    <MainContainer>
      <FlatList
        data={popularMovies}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 10}}
      />
    </MainContainer>
  );
};

export default Popular;
