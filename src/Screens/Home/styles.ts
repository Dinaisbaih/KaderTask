import styled from 'styled-components/native';
import {widthCalculation} from '../../Helpers/index';

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const TopTabWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  padding: 0px 10px;
`;

export const TopTabUpcoming = styled.TouchableOpacity<{active: string}>`
  align-items: center;
  width: ${widthCalculation(100)}px;
  padding: 8px 0px;
  border-radius: 20px;
  background-color: ${({active, theme}) =>
    active === 'upcoming' ? theme.colors.green : theme.colors.lightGray};
  box-shadow: 0px 3px 5px ${({theme}) => theme.colors.lightGray};
`;
export const UpcomingText = styled.Text<{active: string}>`
  font-size: 17px;
  font-weight: bold;
  color: ${({active, theme}) =>
    active === 'upcoming' ? theme.colors.white : theme.colors.black};
`;

export const TopTabPopular = styled.TouchableOpacity<{active: string}>`
  align-items: center;
  width: ${widthCalculation(100)}px;
  padding: 8px 0px;
  border-radius: 20px;
  background-color: ${({active, theme}) =>
    active === 'popular' ? theme.colors.green : theme.colors.lightGray};
  box-shadow: 0px 3px 5px ${({theme}) => theme.colors.lightGray};
`;
export const PopularText = styled.Text<{active: string}>`
  font-size: 17px;
  font-weight: bold;
  color: ${({active, theme}) =>
    active === 'popular' ? theme.colors.white : theme.colors.black};
`;

export const TopTabTopRated = styled.TouchableOpacity<{active: string}>`
  align-items: center;
  width: ${widthCalculation(100)}px;
  padding: 8px 0px;
  border-radius: 20px;
  background-color: ${({active, theme}) =>
    active === 'topRated' ? theme.colors.green : theme.colors.lightGray};
  box-shadow: 0px 3px 5px ${({theme}) => theme.colors.lightGray};
`;
export const TopRatedText = styled.Text<{active: string}>`
  font-size: 17px;
  font-weight: bold;
  color: ${({active, theme}) =>
    active === 'topRated' ? theme.colors.white : theme.colors.black};
`;
