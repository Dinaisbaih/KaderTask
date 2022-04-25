import styled from 'styled-components/native';
import {heightCalculation, widthCalculation} from '../../Helpers';

export const CardStyle = styled.View`
  align-items: center;
`;

export const ImageCard = styled.Image`
  border-radius: 50px;
  height: ${heightCalculation(80)}px;
  width: ${widthCalculation(80)}px;
  margin: 0px 15px;
`;
export const CardTitle = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: 14px;
  text-align: center;
  padding-top: 5px;
  font-weight: bold;
  width: ${widthCalculation(100)}px;
`;
