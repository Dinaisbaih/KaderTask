/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  CardDate,
  CardImage,
  CardStyle,
  CardTitle,
  RateText,
  RateView,
  TextWrapper,
} from './styles';
import {GenresType, MoviesType} from '../../../Types';
import {FlatList, ListRenderItem} from 'react-native';
import {useAppSelector} from '../../Store';
import {selectGenresMovies} from '../../Store/Reducers/Movies/MoviesReducer';
import GenresCard from '../GenresCard';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

interface MovieCardProps {
  movie?: MoviesType;
  navigation?: undefined;
  onPress?: () => void;
  genre_ids?: number[];
}
const MovieCard = ({movie, onPress}: MovieCardProps) => {
  const genres = useAppSelector(selectGenresMovies);

  const renderItem: ListRenderItem<GenresType> | null | undefined = ({
    item,
  }) => {
    const genre_id = movie?.genre_ids?.find(id => {
      return id === item.id;
    });
    if (genre_id === item.id) {
      return <GenresCard genre={item} />;
    }
  };

  return (
    <CardStyle onPress={onPress}>
      <CardImage
        source={{
          uri: `${IMAGE_URL}${movie?.poster_path}`,
        }}
      />
      <TextWrapper>
        <CardTitle numberOfLines={3}>{movie?.title}</CardTitle>
        <CardDate>{movie?.release_date}</CardDate>
        <FlatList
          scrollEnabled={false}
          data={genres}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={{
            flexWrap: 'wrap',
            width: '100%',
            marginTop: 10,
          }}
        />
        <RateView>
          <RateText>{(movie?.vote_average).toString() * 10}%</RateText>
        </RateView>
      </TextWrapper>
    </CardStyle>
  );
};

export default MovieCard;
