import React from 'react';
import { Text } from 'react-native';
import colors from '../config/colors';


function SubHeading({children,style,onPress}) {
    return (
       <Text style={[{color:colors.lightBlack},style]} onPress={onPress}>{children}</Text>
    );
}

export default SubHeading;