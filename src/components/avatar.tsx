import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme';

interface AvatarProps {
  imageUrl?: string;
  userInitials?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {imageUrl, userInitials} = props;

  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image src={imageUrl} style={styles.image} />
      ) : (
        <Text style={styles.initialsText}>{userInitials}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: theme.colors.lightGreen,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  initialsText: {
    color: theme.colors.white,
  },
});
