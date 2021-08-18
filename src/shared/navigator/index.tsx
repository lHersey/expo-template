import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import HomeScreen from 'screens/home';
import { Screens } from 'shared/constants/screens';

const Stack = createNativeStackNavigator();

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.HOME} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
