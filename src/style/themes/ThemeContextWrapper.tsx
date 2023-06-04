import * as React from 'react';
import { ThemeContext, DarkOrLightTheme } from './themes';

interface IThemeContextWrapper {

}

const ThemeContextWrapper: React.FunctionComponent<IThemeContextWrapper> = (props) => {

  const [theme, setTheme] = React.useState<DarkOrLightTheme>(DarkOrLightTheme.dark);

  const changeThemes = (theme: DarkOrLightTheme) => {
    setTheme(theme);
  };

  React.useEffect(() => {
    switch (theme) {
      case DarkOrLightTheme.light:
        break;
      case DarkOrLightTheme.dark:
      default:
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: (value: DarkOrLightTheme) => changeThemes(value) }}>
      {props.children}
    </ThemeContext.Provider >
  );
};

export default ThemeContextWrapper;
