import React from 'react';
import {CreditsType} from '../../../Types';
import {CardStyle, CardTitle, ImageCard} from './styles';

export interface CreditCardProps {
  credit: CreditsType;
}
const CreditsCard = ({credit}: CreditCardProps) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <CardStyle>
      <ImageCard
        source={{
          uri: `${IMAGE_URL}${credit?.profile_path}`,
        }}
      />
      <CardTitle>{credit?.name}</CardTitle>
    </CardStyle>
  );
};

export default CreditsCard;
