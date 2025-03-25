import { StyleSheet, Text, View } from 'react-native';

import { ThemeState } from '@/styles/theme/types';
import { useStylesWithTheme } from '@/styles/theme/useStylesWithTheme';

export const HOME_SCREEN_CONTAINER_TEST_ID = 'home-screen-container';

const HomeScreen = () => {
  const styles = useStylesWithTheme(getStyles);

  return (
    <View style={styles.container} testID={HOME_SCREEN_CONTAINER_TEST_ID}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const getStyles = (theme: Readonly<ThemeState>) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.colors.background.default,
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: theme.colors.text.primary,
      fontSize: theme.typography.fontSize.medium,
      fontWeight: theme.typography.fontWeight.bold,
    },
  });
};

export default HomeScreen;
