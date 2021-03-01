import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import StoryAvatar from '../components/StoryFeed/StoryAvatar';
import StoryFeed from '../components/StoryFeed/StoryFeed';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 10}}>
        <HomeHeader />
        <StoryFeed />
      </View>

      <ScrollView style={{flex: 2, backgroundColor: 'white', padding: 10}}>
        <Text>Hola home</Text>
      </ScrollView>
    </View>
  );
}
