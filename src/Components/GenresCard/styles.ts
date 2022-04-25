import styled from 'styled-components/native';

export const CardStyle = styled.View`
  background-color: ${({theme}) => theme.colors.lightGray};
  align-items: center;
  flex-direction: row;
  border-radius: 20px;
  padding: 4px 10px;
  margin: 10px 8px 0px 0px;
`;

export const CardTitle = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: 15px;
  text-align: center;
`;
