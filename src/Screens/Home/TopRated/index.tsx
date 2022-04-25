import {FlatList, ListRenderItem} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {MainContainer} from './styles';
import {useDispatch} from 'react-redux';
import {GetTopRatedConfigAction} from '../../../Store/Actions/MoviesAction';
import {selectTopRatedMovies} from '../../../Store/Reducers/Movies/MoviesReducer';
import {useAppSelector} from '../../../Store';
import {MoviesType} from '../../../../Types';
import MovieCard from '../../../Components/MovieCard';
import {RootStackParamList} from '../../../Navigations';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp} from '@react-navigation/native';

export type TopRatedScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList, 'MovieDetails'>
>;

interface Props {
  navigation: TopRatedScreenNavigationProp;
}
const TopRated: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const {navigate} = navigation;

  const getMovies = useCallback(() => {
    dispatch(GetTopRatedConfigAction());
  }, [dispatch]);

  const topRatedMovies = useAppSelector(selectTopRatedMovies);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const navigateToDetails = item => {
    navigate('MovieDetails', {movie: item});
  };

  const renderItem: ListRenderItem<MoviesType> | null | undefined = ({
    item,
  }) => {
    return <MovieCard movie={item} onPress={() => navigateToDetails(item)} />;
  };
  return (
    <MainContainer>
      <FlatList
        data={topRatedMovies}
        renderItem={renderItem}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingBottom: 10}}
      />
    </MainContainer>
  );
};

export default TopRated;
