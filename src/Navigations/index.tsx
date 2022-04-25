//React
import React from 'react';

//Navigate
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainerRef} from '@react-navigation/native';

//Screens
import Home from '../Screens/Home';
import MovieDetails from '../Screens/MovieDetails';

//Types
import {MoviesType} from '../../Types';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {movie: MoviesType};
};

const {Navigator, Screen} = createStackNavigator();

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export const goBack = () => {
  navigationRef.current?.goBack();
};

const RootNavigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="MovieDetails" component={MovieDetails} />
    </Navigator>
  );
};

export default RootNavigation;
