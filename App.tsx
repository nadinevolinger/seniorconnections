import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EventScreen from './src/pages/EventScreen';
import LoginScreen from './src/pages/LoginScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import SignUpScreen from './src/pages/SignUpScreen';
import UsersCatalogScreen from './src/pages/UsersCatalogScreen';
import UserProvider from './src/context/user';
import CommonInterestsEventsScreen from './src/pages/CommonInterestsEventsScreen';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor={'#000000'} />
      <UserProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen
            name="UsersCatalogScreen"
            component={UsersCatalogScreen}
          />

          <Stack.Screen
            name="CommonInterestsEventsScreen"
            component={CommonInterestsEventsScreen}
          />

          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="EventScreen" component={EventScreen} />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}
