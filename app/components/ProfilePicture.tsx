import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageSm: {
    resizeMode: 'cover',
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  imageLg: {
    resizeMode: 'cover',
    width: 63,
    height: 63,
    borderRadius: 35,
  },
});

interface ProfilePictureProps {
  size: string;
  imageUrl: string;
}

const ProfilePicture = ({size, imageUrl}: ProfilePictureProps) => {
  return (
    <Image
      style={size === 'large' ? styles.imageLg : styles.imageSm}
      source={{
        uri: imageUrl,
      }}
    />
  );
};

export default ProfilePicture;
