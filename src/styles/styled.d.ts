import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      blueOne: string;
      blueTwo: string;
      green: string;
      red: string;
      textSecondary: string;
      title: string;
      text: string;
      line: string;
      background: string;
      white: string;
      content: string;
      border: string;
    };
  }
}
