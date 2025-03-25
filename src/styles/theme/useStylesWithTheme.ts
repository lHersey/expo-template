import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from './ThemeProvider';
import { NamedStyles, ThemeState } from './types';

const useStylesWithTheme = <T extends NamedStyles<T>>(builderFn: (theme: ThemeState) => T): T => {
  const { themeState: currentTheme } = useTheme();

  return useMemo(() => {
    const styles = builderFn(currentTheme);
    return StyleSheet.create(styles) as T;
  }, [builderFn, currentTheme]);
};

export { useStylesWithTheme };
