import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      blueOne: string;
      blueTwo: string;
      green: string;
      red: string;
      purple: string;
      blueDark: string;
      grayDark: string;      
      gray: string;
      grayLight: string;
      white: string;
      blueTwitter: string;
    }
  }
}