import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeController from '../screens/home/HomeController';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator initialRouteName="HomeStack">
      <Tab.Screen
        name="HomeStack"
        component={HomeController}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <AntDesign
              name="home"
              color={focused ? colors.blue : colors.black}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={HomeController}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <AntDesign
              name="search1"
              color={focused ? colors.blue : colors.black}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MicStack"
        component={HomeController}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <SimpleLineIcons
              name="microphone"
              color={focused ? colors.blue : colors.black}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={HomeController}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name="notifications-outline"
              color={focused ? colors.blue : colors.black}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="InboxStack"
        component={HomeController}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <MaterialIcons
              name="mail-outline"
              color={focused ? colors.blue : colors.black}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
