import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';
import {heightCalculation, widthCalculation} from '../../Helpers';

export const CardStyle = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  padding: 15px;
  margin: 5px;
  ${Platform.select({
    ios: css`
      box-shadow: 1px 1px 4px ${({theme}) => theme.colors.lightGray};
    `,
    android: css`
      elevation: 10;
    `,
  })};
`;

export const CardImage = styled.Image`
  width: ${widthCalculation(120)}px;
  height: ${heightCalculation(210)}px;
  border-radius: 15px;
`;

export const CardTitle = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-weight: bold;
  font-size: 18px;
  text-align: left;
`;
export const CardDate = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: 16px;
  margin-top: 15px;
`;

export const TextWrapper = styled.View`
  width: ${widthCalculation(180)}px;
  margin: 0px 20px;
`;

export const RateView = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 30px;
`;
export const RateText = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.green};
  font-weight: bold;
`;
