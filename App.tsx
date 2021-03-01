/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from './app/screens/SearchScreen';
import ReelsScreen from './app/screens/ReelsScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import MarketplaceScreen from './app/screens/MarketplaceScreen';
import ProfilePicture from './app/components/ProfilePicture';
import IconIO from 'react-native-vector-icons/Ionicons';
import IconFE from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFO from 'react-native-vector-icons/Foundation';
import IconMA from 'react-native-vector-icons/MaterialCommunityIcons';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarVisible: true,
            tabBarIcon: ({focused}) =>
              focused ? (
                <IconIO name="home" color="#434343" size={27} />
              ) : (
                <IconIO name="home-outline" color="#434343" size={27} />
              ),
            tabBarLabel: () => <></>,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarVisible: true,
            tabBarIcon: ({focused}) =>
              focused ? (
                <IconFA name="search" color="#434343" size={27} />
              ) : (
                <IconFE name="search" color="#434343" size={27} />
              ),
            tabBarLabel: () => <></>,
          }}
        />
        <Tab.Screen
          name="Reels"
          component={ReelsScreen}
          options={{
            tabBarVisible: true,
            tabBarIcon: ({focused}) =>
              focused ? (
                <IconFO name="play-video" color="#434343" size={27} />
              ) : (
                <IconFO name="play-video" color="#434343" size={27} />
              ),
            tabBarLabel: () => <></>,
          }}
        />
        <Tab.Screen
          name="Marketplace"
          component={MarketplaceScreen}
          options={{
            tabBarVisible: true,
            tabBarIcon: ({focused}) =>
              focused ? (
                <IconMA name="shopping-outline" color="#434343" size={27} />
              ) : (
                <IconMA name="shopping-outline" color="#434343" size={27} />
              ),
            tabBarLabel: () => <></>,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarVisible: true,
            tabBarIcon: () => (
              <ProfilePicture
                size="small"
                imageUrl="https://cdn.pixabay.com/photo/2016/02/11/16/59/dog-1194083_1280.jpg"
              />
            ),
            tabBarLabel: () => <></>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
