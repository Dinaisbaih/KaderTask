import {SafeAreaView} from 'react-native';
import React from 'react';
import {HeaderRow, HeaderTitle, IconWrapper} from './styles';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components/native';
import {goBack} from '../../Navigations';

interface CustomHeaderProps {
  title?: string | undefined;
  backIcon?: boolean;
  onPress?: () => void;
}
const CustomHeader = ({backIcon, title}: CustomHeaderProps) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView>
      <HeaderRow>
        {backIcon ? (
          <IconWrapper onPress={goBack}>
            <BackIcon color={colors.black} name={'chevron-back'} size={35} />
          </IconWrapper>
        ) : (
          <HeaderTitle>{title}</HeaderTitle>
        )}
      </HeaderRow>
    </SafeAreaView>
  );
};

export default CustomHeader;
