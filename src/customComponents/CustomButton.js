import {Text, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import colors from '../config/colors';

export default function CustomButton({icon, label, onPress, style, disabled}) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          borderWidth: 1,
          borderColor: colors.grey,
          height: 50,
          justifyContent: 'center',
          borderRadius: 30,
          marginBottom: 15,
          flexDirection: 'row',
          alignItems: 'center',
        },
        style,
      ]}>
      {icon}
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          color: style ? colors.white : colors.black,
        }}>
        {label}
      </Text>
    </Pressable>
  );
}
