import { createContext } from 'react';

export const enum DarkOrLightTheme {
  dark = 'dark',
  light = 'light',
}

export const ThemeContext = createContext({
  theme: DarkOrLightTheme.dark,
  changeTheme: (theme: DarkOrLightTheme) => { },
});