import {FlatList, ListRenderItem} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {MainContainer} from './styles';
import {useDispatch} from 'react-redux';
import {GetUpcomingConfigAction} from '../../../Store/Actions/MoviesAction';
import {selectUpcomingMovies} from '../../../Store/Reducers/Movies/MoviesReducer';
import {useAppSelector} from '../../../Store';
import {MoviesType} from '../../../../Types';
import MovieCard from '../../../Components/MovieCard';
import {CompositeNavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../Navigations';
import {StackNavigationProp} from '@react-navigation/stack';

export type UpcomingScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList, 'MovieDetails'>
>;

interface Props {
  navigation: UpcomingScreenNavigationProp;
}
const Upcoming: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const {navigate} = navigation;

  const getMovies = useCallback(() => {
    dispatch(GetUpcomingConfigAction());
  }, [dispatch]);

  const upcomingMovies = useAppSelector(selectUpcomingMovies);

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
        data={upcomingMovies}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 10}}
      />
    </MainContainer>
  );
};

export default Upcoming;
