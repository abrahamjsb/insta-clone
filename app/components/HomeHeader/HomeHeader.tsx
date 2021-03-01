import React from 'react';
import {View, Pressable, Text} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconMa from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIO from 'react-native-vector-icons/Ionicons';

export default function HomeHeader() {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: 12,
      }}>
      <View
        style={{paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
        <IconIO name="ios-logo-instagram" size={30} color="#434343" />
        <Text style={{fontSize: 16, marginLeft: 10}}>Instagram</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignContent: 'center',
          width: 125,
        }}>
        <Pressable onPress={() => alert('This is a button!')}>
          <IconFA name="plus-square-o" size={30} color="#434343" />
        </Pressable>
        <Pressable onPress={() => alert('This is a button!')}>
          <IconAD name="hearto" size={27} color="#434343" />
        </Pressable>
        <Pressable onPress={() => alert('This is a button!')}>
          <IconMa name="facebook-messenger" size={27} color="#434343" />
        </Pressable>
      </View>
    </View>
  );
}
