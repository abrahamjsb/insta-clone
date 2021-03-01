import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import LinearGradient from 'react-native-linear-gradient';
import {StoryFeedData} from '../../types/index';

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 50,
    padding: 10,
    width: 38,
    height: 38,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e3e3e3',
    borderWidth: 1,
  },
  imageContainerLg: {
    borderRadius: 80,
    width: 71,
    height: 71,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#e3e3e3',
    borderWidth: 1,
  },
  gradientLg: {
    height: 76,
    width: 76,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
  },
  gradientSm: {
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
  },
});
interface StoryAvatarProps {
  size: string;
  profile: StoryFeedData;
  isOwn?: boolean;
}
const StoryAvatar = ({size, profile, isOwn}: StoryAvatarProps) => {
  return (
    <LinearGradient
      colors={
        profile.hasUserWatch
          ? ['#FFFFFF', '#FFFFFF']
          : ['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']
      }
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={size === 'large' ? styles.gradientLg : styles.gradientSm}>
      <View
        style={
          size === 'large' ? styles.imageContainerLg : styles.imageContainer
        }>
        <ProfilePicture imageUrl={profile.imageUrl} size={size} />
      </View>
    </LinearGradient>
  );
};

export default StoryAvatar;
