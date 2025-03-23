import 'expo-dev-client';

import SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

import { ThemeProvider } from '@/styles/theme/ThemeProvider';

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    if (isAppReady) {
      SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  return (
    <ThemeProvider onThemeLoaded={() => setIsAppReady(true)}>
      <StatusBar />
      <App />
    </ThemeProvider>
  );
}
