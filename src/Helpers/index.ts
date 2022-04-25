import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const widthCalculation = (IPhonePixel: number) => {
  return width < height
    ? (width * IPhonePixel) / 375
    : (height * IPhonePixel) / 375;
};

export const heightCalculation = (IPhonePixel: number) => {
  return width < height
    ? (width * IPhonePixel) / 375
    : (height * IPhonePixel) / 375;
};
