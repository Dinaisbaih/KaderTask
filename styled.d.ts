import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      lightGray: string;
      alertRed: string;
      darkGray: string;
      green: string;
    };
  }
}
