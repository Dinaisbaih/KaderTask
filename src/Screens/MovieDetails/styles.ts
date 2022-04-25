import styled from 'styled-components/native';
import {heightCalculation, widthCalculation} from '../../Helpers';

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const TopView = styled.View`
  align-items: center;
  padding-top: 20px;
  width: ${widthCalculation(200)}px;
  align-self: center;
`;

export const MovieImage = styled.Image`
  height: ${heightCalculation(230)}px;
  width: ${widthCalculation(160)}px;
  border-radius: 20px;
`;

export const MovieTitle = styled.Text`
  font-size: 23px;
  font-weight: bold;
  padding-top: 20px;
`;
export const MovieRate = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  color: ${({theme}) => theme.colors.green};
`;

export const OverViewWrapper = styled.View`
  margin-top: 30px;
  padding: 0px 20px;
`;
export const OverViewTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
`;

export const OverViewDescription = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.black};
  text-align: left;
  margin-top: 10px;
`;

export const GenresWrapper = styled.View`
  margin-top: 30px;
  padding: 0px 20px;
`;

export const GenresTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
`;

export const CreditsWrapper = styled.View`
  margin-top: 30px;
  padding: 0px 0px;
`;

export const CreditsTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.black};
  padding: 0px 20px;
`;
