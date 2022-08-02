import React from 'react';
import {Text} from 'react-native';

function Heading({children, style, onPress}) {
  return (
    <Text style={[{fontWeight: 'bold', fontSize: 30}, style]} onPress={onPress}>
      {children}
    </Text>
  );
}

export default Heading;
