import Container from '@/components/Container';
import { Image } from 'expo-image';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';


export default function HomeScreen() {
  return (
    <Container className="p-0 bg-red-800">
      <View style={tw`p-4 bg-red-400`}>
        <Text> hello my buddy</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
