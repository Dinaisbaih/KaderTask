import React from 'react';
import {CardStyle, CardTitle} from './styles';
import {GenresType} from '../../../Types';

interface GenresCardProps {
  genre: GenresType;
}
const GenresCard = ({genre}: GenresCardProps) => {
  return (
    <CardStyle>
      <CardTitle>{genre?.name}</CardTitle>
    </CardStyle>
  );
};

export default GenresCard;
