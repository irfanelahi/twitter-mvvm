import React from 'react';
import {Text} from 'react-native';

function EngText({children, style, onPress}) {
  return (
    <Text style={[{}, style]} onPress={onPress}>
      {children}
    </Text>
  );
}

export default EngText;
