import React, {useCallback, useEffect, useState} from 'react';
import {
  MainContainer,
  PopularText,
  TopRatedText,
  TopTabPopular,
  TopTabTopRated,
  TopTabUpcoming,
  TopTabWrapper,
  UpcomingText,
} from './styles';
import CustomHeader from '../../Components/CustomHeader';
import Upcoming from './Upcoming';
import Popular from './Popular';
import TopRated from './TopRated';
import {GetGenresAction} from '../../Store/Actions/MoviesAction';
import {useDispatch} from 'react-redux';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../Navigations';

export type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList, 'MovieDetails'>
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}
const Home: React.FC<Props> = ({navigation}) => {
  const [active, setActive] = useState('upcoming');
  const dispatch = useDispatch();

  const getGenres = useCallback(() => {
    dispatch(GetGenresAction());
  }, [dispatch]);

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  return (
    <MainContainer>
      <CustomHeader title={'Movies'} />
      <TopTabWrapper>
        <TopTabUpcoming active={active} onPress={() => setActive('upcoming')}>
          <UpcomingText active={active}>Upcoming</UpcomingText>
        </TopTabUpcoming>
        <TopTabPopular active={active} onPress={() => setActive('popular')}>
          <PopularText active={active}>Popular</PopularText>
        </TopTabPopular>
        <TopTabTopRated active={active} onPress={() => setActive('topRated')}>
          <TopRatedText active={active}>Top Rated</TopRatedText>
        </TopTabTopRated>
      </TopTabWrapper>
      {active === 'upcoming' ? (
        <Upcoming navigation={navigation} />
      ) : active === 'popular' ? (
        <Popular navigation={navigation} />
      ) : (
        <TopRated navigation={navigation} />
      )}
    </MainContainer>
  );
};

export default Home;
