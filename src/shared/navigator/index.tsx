import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import HomeScreen from 'screens/home';
import { Screens } from 'shared/constants/screens';

const Stack = createStackNavigator();

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.HOME} headerMode="none">
        <Stack.Screen name={Screens.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
