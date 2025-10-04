import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color  }) => <IconSymbol size={30} name="house.fill" color={color} />,
        }}
      />
   <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
         tabBarIcon: ({ color, size }) => (
      <Ionicons name="document" size={size ?? 30} color={color} />
    ), }}
      /><Tabs.Screen
        name="services"
        options={{
          title: 'Services',
           tabBarIcon: ({ color, size }) => (
      <Ionicons name="apps" size={size ?? 30} color={color} />
    ), }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: 'Accounts',
          tabBarIcon: ({ color, size }) => (
      <Ionicons name="person" size={size ?? 28} color={color} />
    ),}}
      />
    </Tabs>
  );
}
