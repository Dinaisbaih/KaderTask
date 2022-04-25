import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const HeaderRow = styled.View`
  margin-top: 10px;
`;

export const HeaderTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding: 10px 20px 0px 20px;
`;

export const IconWrapper = styled.TouchableOpacity`
  left: 20px;
`;
