import 'expo-dev-client';

import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

import HomeScreen from '@/screens/home-screen';
import { ThemeProvider } from '@/styles/theme/ThemeProvider';

export default function App() {
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    if (isThemeReady) {
      SplashScreen.hideAsync();
    }
  }, [isThemeReady]);

  return (
    <ThemeProvider onThemeLoaded={() => setIsThemeReady(true)}>
      <StatusBar />
      <HomeScreen />
    </ThemeProvider>
  );
}
